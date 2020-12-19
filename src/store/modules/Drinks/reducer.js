const Drinks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DRINKS_SUCCESS': {
      const { drinks } = action.payload;
      return {
        ...state,
        drinks,
      };
    }
    case 'ADD_DRINKS_FAILURE': {
      const { drinks } = action.payload;
      return {
        ...state,
        drinks,
      };
    }
    default:
      return state;
  }
};

export default Drinks;
