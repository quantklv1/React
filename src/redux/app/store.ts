import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import todoCompleteReducer from '../features/todoCompleteSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    todoComplete: todoCompleteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
