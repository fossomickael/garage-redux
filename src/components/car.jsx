import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
class Car extends Component {

    render() {
      return <div className="car">
            <img className="car-logo" src="../assets/images/logo_square.svg" />
            
            <Link to={`/cars/${this.props.car.id}`} key={this.props.car.id} >
                {this.props.car.model} {this.props.car.owner} 
            </Link>
          </div>
          
    }

}


export default Car;