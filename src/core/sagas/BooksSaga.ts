import { call, takeEvery, put } from 'redux-saga/effects';
import { BooksService } from '../../services/api/BooksService';
import { actions } from '../Constants';
import { setSearchBooks } from '../slices/SearchBooksSlice';
import { setNewBooks } from '../slices/NewBooksSlice';
import { setFavBooks } from '../slices/FavBooksSlice';
import { setBook } from '../slices/BookSlice';
import { IBooksInfo, IBook } from '../../types/Books';

function* getNewBooksSaga() {
  try {
    const res: { data: IBooksInfo } = yield call(() => BooksService.getNewBooks());
    const books = res?.data as IBooksInfo;
    yield put(setNewBooks(books));
  } catch (e) {
    console.log(e);
  }
}

function* getSearchBooksSaga({ payload }: any) {
  try {
    const res: { data: IBooksInfo } = yield call(() =>
      BooksService.getSearchBooks(payload.searchText, payload.selPageNo),
    );
    const books = res?.data as IBooksInfo;
    books.books.map((book) => {
      const ind = payload.favList.findIndex((item: IBook) => {
        return item.isbn13 == book.isbn13;
      });
      if (ind > -1) {
        book.isFav = true;
      } else {
        book.isFav = false;
      }
    });
    yield put(setSearchBooks(books));
  } catch (e) {
    console.log(e);
  }
}

function* getFavBooksSaga({ payload }: any) {
  try {
    let books: IBook[] = [];
    if (payload) {
      let itemFrom: number = (payload.selPageNo - 1) * payload.itemsCount;
      const itemTo = payload.selPageNo * payload.itemsCount;
      const cnt = payload.favList.length < itemTo ? payload.favList.length : itemTo;
      while (itemFrom < cnt) {
        const book = payload.favList[itemFrom] as IBook;
        books.push(book);
        itemFrom++;
      }
    }
    yield put(setFavBooks(books));
  } catch (e) {
    console.log(e);
  }
}

function* getBookSaga({ payload }: any) {
  try {
    const res: { data: IBook } = yield call(() => BooksService.getBook(payload.isbn13));
    const book = res?.data as IBook;
    const ind = payload.favList.findIndex((item: IBook) => {
      return item.isbn13 == book.isbn13;
    });
    if (ind > -1) {
      book.isFav = true;
    } else {
      book.isFav = false;
    }
    yield put(setBook(book));
  } catch (e) {
    console.log(e);
  }
}

export function* watchBooksSaga() {
  yield takeEvery(actions.GET_NEWBOOKS, getNewBooksSaga);
  yield takeEvery(actions.GET_FAVBOOKS, getFavBooksSaga);
  yield takeEvery(actions.GET_SEARCHBOOKS, getSearchBooksSaga);
  yield takeEvery(actions.GET_BOOK, getBookSaga);
}
