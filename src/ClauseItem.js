// ClauseItem.js
import React from 'react';
import { useDrag } from 'react-dnd';

const ClauseItem = ({ clause }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'clause',
    item: { clause },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="clause-item"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <h3>{clause.title}</h3>
      <p>{clause.definition}</p>
    </div>
  );
};

export default ClauseItem;
