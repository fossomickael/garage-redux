const cars_reducer = (state, action) => {
    if (state === undefined) {
      return [];
    }
    switch (action.type) {
      case "SET_CARS_FULFILLED":
        return action.payload;
      case "SET_CARS":
          return action.payload;
      default:
            return state;        

    }
}

export default cars_reducer;