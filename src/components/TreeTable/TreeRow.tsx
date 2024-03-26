import React, { useState } from 'react';
import { CloseIcon, ExpandLessIcon, ExpandMoreIcon } from '../../assets/icons';
import { useGetKeys } from './hooks';
import { TreeItemType, TreeItemSelectors } from '../../types/treeTable';
import TreeRowTable from './TreeRowTable';

export type TreeRowProps = {
  item: TreeItemType;
  header: string[];
  onDelete: (selectors: TreeItemSelectors) => void;
};

function TreeRow({ item, header, onDelete }: TreeRowProps) {
  const [open, setOpen] = useState(false);

  const { childrenKey, childrens } = useGetKeys(item);

  return (
    <>
      <tr>
        {childrens.length ? (
          <td onClick={() => setOpen(!open)} className='clickable'>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </td>
        ) : (
          <td />
        )}
        {header.map((key) => (
          <td key={key}>{item.data[key]}</td>
        ))}
        <td className='clickable' onClick={() => onDelete([])}>
          <CloseIcon />
        </td>
      </tr>
      {open && childrens.length > 0 && (
        <TreeRowTable
          header={header}
          childrens={childrens}
          onDelete={(selectors: TreeItemSelectors) => {
            onDelete(['children', childrenKey, 'records', ...selectors]);
          }}
        />
      )}
    </>
  );
}

export default TreeRow;
