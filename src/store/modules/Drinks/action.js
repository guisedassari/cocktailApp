export function addDrinksRequest(category) {
  return {
    type: 'ADD_DRINKS_REQUEST',
    payload: {
      category,
    },
  };
}

export function addDrinksSuccess(drinks) {
  return {
    type: 'ADD_DRINKS_SUCCESS',
    payload: {
      drinks,
    },
  };
}

export function addDrinksFailure(drinks) {
  return {
    type: 'ADD_DRINKS_FAILURE',
    payload: {
      drinks,
    },
  };
}

export function searchDrinkRequest(drink) {
  return {
    type: 'SEARCH_DRINK_REQUEST',
    payload: {
      drink,
    },
  };
}
