import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice'
import todoSlice from '../features/counter/todoSlice'
import crudappSlice from '../features/counter/crudappSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    crudapp: crudappSlice,
  
  },
});
