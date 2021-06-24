import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOneCar } from "../actions/cars.js"
import { removeCar } from "../actions/cars.js"
class CarsShow extends Component {

    handleClick = () => {
        this.props.removeCar(this.props.history, this.props.car);
      }

    componentDidMount() {
        if(!this.props.car) {
            this.props.setOneCar(this.props.match.params.id);
        }
    }
    render() {
        if (!this.props.car)  {
            return <div>Loading</div>
        };
        return <div className="car">
            <img className="car-logo" src="../assets/images/logo_square.svg" />
               {this.props.car.owner} {this.props.car.model}
                <button className="delete" onClick={this.handleClick}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                        Delete
                </button>
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
        return bindActionCreators({setOneCar,  removeCar}, dispatch);
    }

    export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);