import React from 'react';
import { Link } from 'react-router-dom';

const Car = (props) => {
  return (<div className="car">
    <img className="car-logo" alt="hello" src="../assets/images/logo_square.svg" />

    <Link to={`/cars/${props.car.id}`} key={props.car.id} >
      {props.car.model} {props.car.owner}
    </Link>
  </div>);
};


export default Car;
