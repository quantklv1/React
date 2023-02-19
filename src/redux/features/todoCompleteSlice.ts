import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoComplete {
  id: string;
  title: string;
  check: boolean;
}

const todoCompleteSlice = createSlice({
  name: 'todoComplete',
  initialState: [{ id: 1, title: 'add item to list', check: true }],
  reducers: {
    addCompleteItem: (state, action: PayloadAction<TodoComplete>) => {
      const newItem = {
        id: new Date().getTime().toString(),
        title: action.payload.title,
        check: action.payload.check,
      };
      newItem.check ? state.push(newItem) : state.unshift(newItem);
    },
  },
});

export const { addCompleteItem } = todoCompleteSlice.actions;

export default todoCompleteSlice.reducer;
