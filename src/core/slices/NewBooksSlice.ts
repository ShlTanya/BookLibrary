import { createAction, createSlice } from '@reduxjs/toolkit';
import { IBooksInfo } from '../../types/Books';
import { actions } from '../Constants';

interface INewBooksState {
  booksInfo: IBooksInfo | null;
  itemsCount: number;
  pageCount: number;
  selPageNo: number;
}

const initialState: INewBooksState = {
  booksInfo: null,
  itemsCount: 10,
  pageCount: 1,
  selPageNo: 1,
};

export const getNewBooksAction = createAction(actions.GET_NEWBOOKS);

export const newBooksSlice = createSlice({
  name: 'newbooks',
  initialState,
  reducers: {
    setNewBooks: (state, action) => {
      if (action && action.payload) {
        state.pageCount = state.booksInfo?.total
          ? Math.ceil(state.booksInfo?.total / state.itemsCount)
          : 0;
        const books = action.payload.books.slice(
          (state.selPageNo - 1) * state.itemsCount,
          state.selPageNo * state.itemsCount,
        );
        state.booksInfo = { ...action.payload, books: books };
      } else {
        state.booksInfo = null;
        state.pageCount = 1;
        state.selPageNo = 1;
      }
    },
    setItemsCount: (state, action) => {
      state.itemsCount = action.payload;
    },
    setSelPageNo: (state, action) => {
      if (
        action.payload > 0 &&
        action.payload <= state.pageCount &&
        action.payload <= state.pageCount
      ) {
        state.selPageNo = action.payload;
      }
    },
  },
});

export const { setNewBooks, setItemsCount, setSelPageNo } = newBooksSlice.actions;

export const getBooks = (state: { newBooksSl: INewBooksState }) => ({
  books: state.newBooksSl.booksInfo?.books,
  pageCount: state.newBooksSl.pageCount,
  selPageNo: state.newBooksSl.selPageNo,
});

export default newBooksSlice.reducer;
