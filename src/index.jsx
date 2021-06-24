import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import carsReducer from './reducers/cars_reducer';
import CarsNew from './containers/cars_new';
import CarsShow from './containers/cars_show';
import App from './components/app';
import '../assets/stylesheets/application.scss';


const initialState = {
  cars: [],
  garage: "Mike",
};


const reducers = combineReducers({
  // key: reducer
  cars: carsReducer,
  form: formReducer,
  garage: (state = null, action) => state
});

const middlewares = applyMiddleware(promise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cars/new" component={CarsNew} />
        <Route path="/cars/:id" component={CarsShow} />

      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
