import { configureStore } from '@reduxjs/toolkit';
import searchBooksSlice from './slices/SearchBooksSlice';
import newBooksSlice from './slices/NewBooksSlice';
import favBooksSlice from './slices/FavBooksSlice';
import basketSlice from './slices/BasketSlice';
import bookSlice from './slices/BookSlice';

import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './Saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    searchBooksSl: searchBooksSlice,
    newBooksSl: newBooksSlice,
    favBooksSl: favBooksSlice,
    bookSl: bookSlice,
    basketSl: basketSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
