import { createSlice } from '@reduxjs/toolkit';
import exampleData from './example-data.json';
import { RootState } from '..';
import { TreeItemType } from '../../types/treeTable';
import deleteFromArray from '../../utils/deleteFromArray';

export type CharacterState = {
  data: TreeItemType[];
};
const initialState: CharacterState = {
  data: exampleData as TreeItemType[],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    deleteCharacter: (state, action) => {
      state.data = deleteFromArray(state.data, action.payload);
    },
  },
});

export const selecCharacters = (state: RootState): TreeItemType[] => state.characters.data;
export const { deleteCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
