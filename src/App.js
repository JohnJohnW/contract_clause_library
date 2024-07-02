// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import ClauseList from './ClauseList';
import Sidebar from './Sidebar';
import clausesData from './clausesData';
import Fuse from 'fuse.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import WordDocument from './WordDocument';
import './App.css';

const App = () => {
  const [filteredClauses, setFilteredClauses] = useState([]);
  const [currentDocument, setCurrentDocument] = useState(null);
  const [category, setCategory] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setFilteredClauses(clausesData);
  }, []);

  useEffect(() => {
    filterClauses();
  }, [category, query]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const filterClauses = () => {
    const fuse = new Fuse(clausesData, { keys: ['title', 'definition', 'text'] });
    let results = query ? fuse.search(query).map(result => result.item) : clausesData;

    if (category) {
      results = results.filter(clause => clause.category === category);
    }

    setFilteredClauses(results);
  };

  const createNewDocument = () => {
    setCurrentDocument([]);
  };

  const removeClauseFromDocument = (clause) => {
    setCurrentDocument((prevDocument) => prevDocument.filter((item) => item.id !== clause.id));
  };

  const categories = [...new Set(clausesData.map(clause => clause.category))];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="main">
          <Sidebar categories={categories} onCategorySelect={handleCategorySelect} />
          <div className="main-content">
            <SearchBar onSearch={handleSearch} />
            {currentDocument !== null && (
              <WordDocument document={currentDocument} setDocument={setCurrentDocument} />
            )}
            <button onClick={createNewDocument} className="add-clause-btn">
              New Document
            </button>
            <Routes>
              <Route path="/" element={<ClauseList clauses={filteredClauses} />} />
              <Route path="/category/:category" element={<CategoryClauses />} />
            </Routes>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

const CategoryClauses = () => {
  const { category } = useParams();
  const filteredClauses = clausesData.filter(clause => clause.category === category);
  return <ClauseList clauses={filteredClauses} />;
};

export default App;
