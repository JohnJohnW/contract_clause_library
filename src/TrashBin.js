// TrashBin.js
import React from 'react';
import { useDrop } from 'react-dnd';
import { FaTrash } from 'react-icons/fa'; // Import the trash icon from react-icons

const TrashBin = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['clause', 'documentClause'],
    drop: (item) => onDrop(item.clause),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className="trash-bin-icon" style={{ color: isOver ? 'red' : 'gray' }}>
      <FaTrash size={30} />
    </div>
  );
};

export default TrashBin;
