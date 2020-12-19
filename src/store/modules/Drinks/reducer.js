const Drinks = (state = [], action) => {
  console.log('reducer');
  console.log(action.payload);
  switch (action.type) {
    case 'ADD_DRINKS_SUCCESS': {
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
