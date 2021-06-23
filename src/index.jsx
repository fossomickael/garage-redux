import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHistory as history } from 'history';
import carsReducer from './reducers/cars_reducer';
import CarsNew from './containers/cars_new';
import App from './components/app';
import '../assets/stylesheets/application.scss';

const initialState = {
  cars: []
};


const reducers = combineReducers({
  // key: reducer
  cars: carsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers,initialState , middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
          <Route path="/cars/new" component={CarsNew} />
          <Route path="/" component={App} />
            
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
