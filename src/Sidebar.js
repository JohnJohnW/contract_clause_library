import React from 'react';

const Sidebar = ({ categories, onCategorySelect }) => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <button onClick={() => onCategorySelect(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
