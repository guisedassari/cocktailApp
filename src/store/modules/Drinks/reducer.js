const INITIAL_STATE = [];

const Drinks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_DRINKS_SUCCESS': {
      const { drinks } = action.payload;
      return drinks;
    }
    case 'ADD_DRINKS_FAILURE': {
      console.log('cai aqui');
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default Drinks;
