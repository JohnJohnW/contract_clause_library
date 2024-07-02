import React from 'react';
import ClauseItem from './ClauseItem';

const ClauseList = ({ clauses }) => {
  return (
    <div>
      {clauses.map((clause) => (
        <ClauseItem key={clause.id} clause={clause} />
      ))}
    </div>
  );
};

export default ClauseList;
