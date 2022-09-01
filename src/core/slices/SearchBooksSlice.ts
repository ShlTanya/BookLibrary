import { createAction, createSlice } from '@reduxjs/toolkit';
import { IBooksInfo, IBook } from '../../types/Books';
import { actions } from '../Constants';

interface ISearchBooksState {
  booksInfo: IBooksInfo | null;
  itemsCount: number;
  pageCount: number;
  selPageNo: number;
  searchText: string;
}

const initialState: ISearchBooksState = {
  booksInfo: null,
  itemsCount: 10,
  pageCount: 1,
  selPageNo: 1,
  searchText: '',
};

export const getSearchBooksAction = createAction<{
  searchText: string;
  selPageNo: number;
  favList: IBook[];
}>(actions.GET_SEARCHBOOKS);

export const searchBooksSlice = createSlice({
  name: 'searchbooks',
  initialState,
  reducers: {
    setSearchBooks: (state, action) => {
      if (action && action.payload && action.payload.books) {
        const books = action.payload.books.map((book: IBook) => ({ ...book }));
        state.booksInfo = { ...action.payload, books: books };
        state.pageCount = state.booksInfo?.total
          ? Math.ceil(state.booksInfo?.total / state.itemsCount)
          : 0;
      } else {
        state.booksInfo = null;
        state.pageCount = 1;
        state.selPageNo = 1;
      }
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
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
    setFavBook: (state, action) => {
      const newBooks = state?.booksInfo?.books.map((book: IBook) => ({
        ...book,
        isFav: book === action.payload ? !book.isFav : book.isFav,
      }));
      state.booksInfo = { ...action.payload, books: newBooks };
    },
  },
});

export const { setSearchBooks, setSearchText, setItemsCount, setSelPageNo, setFavBook } =
  searchBooksSlice.actions;

export const getBooks = (state: { searchBooksSl: ISearchBooksState }) => ({
  books: state.searchBooksSl.booksInfo?.books,
  pageCount: state.searchBooksSl.pageCount,
  selPageNo: state.searchBooksSl.selPageNo,
});

export const getSearchText = (state: { searchBooksSl: ISearchBooksState }) =>
  state.searchBooksSl.searchText;
export const getItemsCount = (state: { searchBooksSl: ISearchBooksState }) =>
  state.searchBooksSl.itemsCount;

export default searchBooksSlice.reducer;
