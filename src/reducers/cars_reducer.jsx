const carsReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case "SET_CARS_FULFILLED":
      return action.payload;
    case "SET_ONE_CAR_FULFILLED":
      return action.payload;
    case "ADD_CAR_FULFILLED":
      return state;
    case "REMOVE_CAR_FULFILLED":
      return state;
    default:
      return state;
  }
};

export default carsReducer;
