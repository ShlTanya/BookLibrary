import { all } from 'redux-saga/effects';

import { watchBooksSaga } from './sagas/BooksSaga';

export function* rootSaga() {
  try {
    yield all([watchBooksSaga()]);
  } catch (e) {
    console.log({ e });
  }
}
