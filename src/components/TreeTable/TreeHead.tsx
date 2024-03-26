import React from 'react';

export type TreeHeadProps = {
  header: string[];
};

function TreeHead({ header }: TreeHeadProps) {
  return (
    <tr>
      <th />
      {header.map((value) => (
        <th key={value}>{value}</th>
      ))}
      <th>delete</th>
    </tr>
  );
}

export default TreeHead;
