import { createAction, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../types/Books';
import { actions } from '../Constants';

interface IFavBooksState {
  books: IBook[] | null;
  favList: IBook[];
  itemsCount: number;
  pageCount: number;
  selPageNo: number;
}

const initialState: IFavBooksState = {
  books: null,
  favList: [],
  itemsCount: 10,
  pageCount: 1,
  selPageNo: 1,
};

export const getFavBooksAction = createAction<{
  selPageNo: number;
  itemsCount: number;
  favList: IBook[];
}>(actions.GET_FAVBOOKS);

export const favBooksSlice = createSlice({
  name: 'favbooks',
  initialState,
  reducers: {
    setFavBooks: (state, action) => {
      if (action && action.payload) {
        state.pageCount = state.favList?.length
          ? Math.ceil(state.favList?.length / state.itemsCount)
          : 0;
        const books = action.payload.map((book: IBook) => ({ ...book }));
        state.books = books;
      } else {
        state.books = null;
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
    addToFav: (state, action) => {
      state.favList.push({ ...action.payload, isFav: true });
    },
    delFromFav: (state, action) => {
      const ind = state.favList.findIndex((item: IBook) => {
        return item.isbn13 == action.payload.isbn13;
      });
      if (ind > -1) {
        state.favList.splice(ind, 1);
      }
    },
  },
});

export const { setFavBooks, setItemsCount, setSelPageNo, addToFav, delFromFav } =
  favBooksSlice.actions;

export const getBooks = (state: { favBooksSl: IFavBooksState }) => ({
  books: state.favBooksSl.books,
  favList: state.favBooksSl.favList,
  itemsCount: state.favBooksSl.itemsCount,
  pageCount: state.favBooksSl.pageCount,
  selPageNo: state.favBooksSl.selPageNo,
});

export const getFavListBooks = (state: { favBooksSl: IFavBooksState }) => state.favBooksSl.favList;

export default favBooksSlice.reducer;
