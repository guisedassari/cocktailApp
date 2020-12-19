import { all } from 'redux-saga/effects';

import drinks from './Drinks/saga';

export default function* rootSaga() {
  return yield all([drinks]);
}
