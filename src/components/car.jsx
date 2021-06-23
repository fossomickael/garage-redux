import React, { Component } from 'react'; 

class Car extends Component {

    render() {
      return <div className="cat">
          <img className="car-logo" src="assets/images/logo_square.svg" />
          {this.props.car.model} {this.props.car.owner} </div>
    }

}


export default Car;