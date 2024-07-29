import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';
import DocumentClauseItem from './DocumentClauseItem';
import TrashBin from './TrashBin';
import './App.css';

const WordDocument = ({ document, setDocument }) => {
  const [title, setTitle] = useState('');

  const [{ isOver }, drop] = useDrop({
    accept: 'clause',
    drop: (item) => addClauseToDocument(item.clause),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addClauseToDocument = (clause) => {
    setDocument((prevDocument) => {
      if (prevDocument.some((item) => item.id === clause.id)) {
        return prevDocument; // Avoid adding duplicate clauses
      }
      return [...prevDocument, { ...clause, id: `${clause.id}-${Date.now()}` }]; // Ensure unique IDs
    });
  };

  const moveClause = (fromIndex, toIndex) => {
    setDocument((prevDocument) => {
      const updatedDocument = [...prevDocument];
      const [movedClause] = updatedDocument.splice(fromIndex, 1);
      updatedDocument.splice(toIndex, 0, movedClause);
      return updatedDocument;
    });
  };

  const removeClauseFromDocument = (clauseId) => {
    setDocument((prevDocument) =>
      prevDocument.filter((item) => item.id !== clauseId)
    );
  };

  const generateWordDocument = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: title,
                  bold: true,
                  size: 48,
                }),
              ],
              heading: HeadingLevel.TITLE,
              alignment: 'center',
            }),
            new Paragraph({
              text: '\n\n\n',
            }),
            ...document.flatMap((clause) => [
              new Paragraph({
                children: [
                  new TextRun({
                    text: clause.title,
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: '\n' + clause.text,
                  }),
                ],
              }),
              new Paragraph({
                text: '\n\n\n',
              }),
            ]),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'ContractClauses.docx');
    });
  };

  return (
    <div
      className="word-document"
      ref={drop}
      style={{ borderColor: isOver ? 'lightgreen' : '#555', position: 'relative' }}
    >
      <h3>Word Document</h3>
      <input
        type="text"
        placeholder="Document Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="document-title-input"
      />
      {document.map((clause, index) => (
        <DocumentClauseItem
          key={clause.id}
          clause={clause}
          index={index}
          moveClause={moveClause}
        />
      ))}
      <button onClick={generateWordDocument} className="add-clause-btn">
        Generate Word Document
      </button>
      <TrashBin onDrop={(clause) => removeClauseFromDocument(clause.id)} />
    </div>
  );
};

export default WordDocument;
