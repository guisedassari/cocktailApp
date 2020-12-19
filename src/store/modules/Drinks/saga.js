import { all, takeLatest, call, put } from 'redux-saga/effects';
import { addDrinksSuccess } from './action';
import api from '../../../services/api';

function* getDrinks(action) {
  console.log('saga geDrinks');
  console.log(action.payload.category);
  const drinksListResponse = yield call(
    api.get,
    `filter.php?c=${action.payload.category}`,
  );
  console.log('Bebidas vindo do redux-saga');
  console.log(drinksListResponse.data.drinks);
  yield put(addDrinksSuccess(drinksListResponse.data.drinks));
}

export default all([takeLatest('ADD_DRINKS_REQUEST', getDrinks)]);
