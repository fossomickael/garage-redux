const BASE_URL = 'https://wagon-garage-api.herokuapp.com';


export const setCars = (garage) => {
  return {
    type: "SET_CARS",
    async payload () {
      const url = `${BASE_URL}/${garage}/cars`;
      const response = await fetch(url);
      const cars = await response.json();
      return cars;
    }
  };
};
export const setOneCar = (id) => {
  return {
    type: "SET_ONE_CAR",
    async payload () {
      const url = `${BASE_URL}/cars/${id}`;
      const response = await fetch(url);
      const car = await response.json();
      return [car];
    }
  };
};

async function postCar(garage, car) {
  const url = `${BASE_URL}/${garage}/cars`;
  const body = { car };
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  };
  const response = await fetch(url, settings);

  return response;
}

export const addCar = (garage, car, callback) => {
  return {
    type: "ADD_CAR",
    async payload () {
      const response = await postCar(garage, car);

      callback();
      return response;
    }
  };
};

async function removeCarApi(car) {
  const url = `${BASE_URL}/cars/${car.id}`;

  const settings = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

  };
  const response = await fetch(url, settings);

  return response;
}


export const removeCar = (history, car) => {
  return {
    type: "REMOVE_CAR",
    async payload () {
      const response = await removeCarApi(car);
      const message = await response.json();
      history.push("");
      return message;
    }
  };
};

