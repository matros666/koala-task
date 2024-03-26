import React from 'react';
import TreeHead from './TreeHead';
import TreeRow from './TreeRow';
import { useGetHeader } from './hooks';
import { TreeItemSelectors, TreeItemType } from '../../types/treeTable';

export type TreeTableProps = {
  data: TreeItemType[];
  onDelete: (selectors: TreeItemSelectors) => void;
};

function TreeTable({ data, onDelete }: TreeTableProps) {
  const header = useGetHeader(data);

  return (
    <table>
      <thead>
        <TreeHead header={header} />
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <TreeRow
              item={item}
              key={item.data.ID}
              header={header}
              onDelete={(selectors: TreeItemSelectors) => {
                onDelete([index, ...selectors]);
              }}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TreeTable;
