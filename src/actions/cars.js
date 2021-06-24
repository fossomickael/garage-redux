const BASE_URL = 'https://wagon-garage-api.herokuapp.com';
export const carsData = [
    { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
    { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
    { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
    { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
  ];

export const setCars = (garage) => { 
    return {
        type: "SET_CARS",
        async payload () {
          const url = `${BASE_URL}/${garage}/cars`;
          const response = await fetch(url);
          const cars = await response.json();
          return  cars;
        }
  }
}
export const setOneCar = (id, garage) => { 
  return {
      type: "SET_ONE_CAR",
      async payload () {
        const url = `${BASE_URL}/cars/${id}`;
        const response = await fetch(url);
        const car = await response.json();
        return  [car];
      }
    };

}

export const addCar = (garage, car, callback) => { 
    return {
        type: "ADD_CAR",
        async payload () {
          const response = await postCar(garage,car);
          const message = await response.json();
          callback();
          return response;
        }
      };

}

async function postCar(garage,car) {
  
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