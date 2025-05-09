import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    deletetodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editetodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find(t => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    }
  }
});


export const { addtodo, deletetodo, editetodo } = todoSlice.actions;
export default todoSlice.reducer;
