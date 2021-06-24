export const carsData = [
    { id: 1, brand: 'Peugeot', model: '106', owner: 'John', plate: 'WOB-ED-42' },
    { id: 2, brand: 'Renault', model: 'Scenic', owner: 'Paul', plate: 'AAA-12-BC' },
    { id: 3, brand: 'Aston Martin', model: 'DB Mark III', owner: 'James', plate: '418-ED-94' },
    { id: 4, brand: 'VW', model: 'Beetle', owner: 'George', plate: '1234-XD-75' }
  ];

export const setCars = () => { 
    return {
        type: "SET_CARS",
        payload:  carsData
      };

}

export const setOneCar = (id) => { 
  return {
      type: "SET_ONE_CAR",
      payload:  [ carsData[id - 1] ]
    };

}

export const addCar = (garage, car, callback) => { 
    return {
        type: "ADD_CARS",
        payload: null
      };

}