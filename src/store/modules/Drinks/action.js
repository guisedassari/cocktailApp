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
