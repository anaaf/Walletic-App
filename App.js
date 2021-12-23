import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/Auth';
import {combineReducers} from 'redux';
import Navigation from './Navigation/Navigation';
import App1 from './App1';
//combining the reducers
const reducers = combineReducers({
  auth: auth,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      {/* <App1 /> */}
    </Provider>
  );
}
