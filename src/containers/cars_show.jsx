import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOneCar } from "../actions/cars.js"
class CarsShow extends Component {
    componentDidMount() {
        if(!this.props.car) {
            this.props.setOneCar(this.props.match.params.id, this.props.garage);
        }
    }
    render() {
        if (!this.props.car)  {
            return <div>Loading</div>
        };
        return <div className="car">
            <img className="car-logo" src="../assets/images/logo_square.svg" />
               {this.props.car.owner} {this.props.car.model}
            </div>
      }
}

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id);
        return {
        car: state.cars.find((car) => car.id === id),
        garage: state.garare
};
}

  
    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({setOneCar }, dispatch);
    }

    export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);