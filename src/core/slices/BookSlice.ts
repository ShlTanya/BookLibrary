import { createAction, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../types/Books';
import { actions } from '../Constants';

interface IBookState {
  book: IBook | null;
}

const initialState: IBookState = {
  book: null,
};

export const getBookAction = createAction<{ isbn13: string; favList: string[] }>(actions.GET_BOOK);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload;
    },
    setFavBook: (state, action) => {
      state.book = { ...action.payload, isFav: action.payload.isFav };
    },
  },
});

export const { setBook, setFavBook } = bookSlice.actions;

export const getBook = (state: { bookSl: IBookState }) => state.bookSl.book;

export default bookSlice.reducer;
