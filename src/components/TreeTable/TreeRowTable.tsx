import React from 'react';
import { TreeItemSelectors, TreeItemType } from '../../types/treeTable';
import TreeTable from '.';

type TreeRowTableProps = {
  header: string[];
  childrens: TreeItemType[];
  onDelete: (selectors: TreeItemSelectors) => void;
};

function TreeRowTable({ header, childrens, onDelete }: TreeRowTableProps) {
  return (
    <tr>
      <td colSpan={header.length + 2} className='nested-table'>
        <div>
          <TreeTable data={childrens} onDelete={onDelete} />
        </div>
      </td>
    </tr>
  );
}

export default TreeRowTable;
