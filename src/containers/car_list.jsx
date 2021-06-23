import { connect } from 'react-redux';
import { setCars } from "../actions/cars.js"
import React, { Component } from 'react'; 
import { bindActionCreators } from 'redux';
import Car from '../components/car';

class CarList extends Component {

    componentDidMount() { 
        this.props.setCars(); 
    }
    
    render() {
        return (
            <div> {this.props.cars.map((car) => {
                return <Car key={car.id} car={car}  />;
            })} </div>
        )

    }

}
const mapStateToProps = (state) => {
    return {
      cars: state.cars
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setCars}, dispatch);
  }


export default  connect(mapStateToProps, mapDispatchToProps)(CarList);