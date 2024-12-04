import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    toggleReadStatus: (state, action) => {
      const index = state.books.findIndex(book => book.id === action.payload);
      if (index !== -1) {
        state.books[index].isRead = !state.books[index].isRead;
      }
    },
  },
});

export const { addBook, updateBook, toggleReadStatus } = booksSlice.actions;
export default booksSlice.reducer;
