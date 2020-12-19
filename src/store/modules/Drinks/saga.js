import { all, takeLatest, call, put } from 'redux-saga/effects';
import { addDrinksSuccess, addDrinksFailure } from './action';
import api from '../../../services/api';

function* getDrinks(action) {
  const drinksListResponse = yield call(
    api.get,
    `filter.php?c=${action.payload.category}`,
  );

  yield put(addDrinksSuccess(drinksListResponse.data.drinks));
}
function* searchDrink(action) {
  const drinkResponse = yield call(
    api.get,
    `search.php?s=${action.payload.drink}`,
  );
  if (drinkResponse.data.drinks !== null) {
    yield put(addDrinksSuccess(drinkResponse.data.drinks));
  } else {
    yield put(addDrinksFailure(drinkResponse.data.drinks));
  }
}

export default all([
  takeLatest('ADD_DRINKS_REQUEST', getDrinks),
  takeLatest('SEARCH_DRINK_REQUEST', searchDrink),
]);
