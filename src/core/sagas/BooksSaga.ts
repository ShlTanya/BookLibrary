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
      if (payload.favList.indexOf(book.isbn13) != -1) {
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
    let i: number = 0;
    let books: IBook[] = [];
    if (payload) {
      const cnt = payload.favList.length;
      while (i < cnt) {
        const res: { data: IBook } = yield call(() => BooksService.getBook(payload.favList[i]));
        const book = res?.data as IBook;
        book.isFav = true;
        books.push(book);
        i++;
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
    if (payload.favList.indexOf(book.isbn13) != -1) {
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
