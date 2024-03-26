import React, { useCallback } from 'react';
import { selecCharacters, deleteCharacter } from '../../store/characters/charactersSlice';
import TreeTable from '../../components/TreeTable';
import { TreeItemSelectors } from '../../types/treeTable';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function Characters(): JSX.Element {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selecCharacters);

  const onDelete = useCallback(
    (selectors: TreeItemSelectors) => {
      dispatch(deleteCharacter(selectors));
    },
    [dispatch]
  );

  return <TreeTable data={characters} onDelete={onDelete} />;
}
