import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCars } from "../actions/cars";
import Car from '../components/car';

class CarList extends Component {
  componentDidMount() {
    this.props.setCars(this.props.garage);
  }

  render() {
    return (
      <div> {this.props.cars.map((car) => {
        return <Car key={car.id} car={car} />;
      })} </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    garage: state.garage
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCars }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(CarList);
