// DocumentClauseItem.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DocumentClauseItem = ({ clause, index, moveClause }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'documentClause',
    item: { clause },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'documentClause',
    hover: (item) => {
      if (item.index !== index) {
        moveClause(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <div ref={(node) => drag(drop(node))} className="clause-item" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h3>{clause.title}</h3>
      <p>{clause.definition}</p>
    </div>
  );
};

export default DocumentClauseItem;
