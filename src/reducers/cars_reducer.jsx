const cars_reducer = (state, action) => {
    if (state === undefined) {
      return [];
    }
    switch (action.type) {
      case "SET_CARS_FULFILLED":
          return action.payload;
      case "SET_ONE_CAR":
          return action.payload;
      case "ADD_CAR_FULFILLED":
        return state;
      default:
          return state;
    }
}

export default cars_reducer;