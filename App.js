import 'react-native-gesture-handler';
import React from 'react';
import {Provider, ReactReduxContext} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import auth from './src/redux/reducers/Auth';
import QrScannerReducer from './src/redux/reducers/QRScannerReducer'
import {QrDataSaveReducer, modalReducer} from './src/redux/reducers/QRScannerReducer'
import {combineReducers} from 'redux';
import Navigation from './src/Navigation/Navigation';
import App1 from './App1';
//import store1 from './Playground/Redux/Store' // pg

//combining the reducers
const reducers = combineReducers({
  auth,
  QrScannerReducer, 
  QrDataSaveReducer,
  modalReducer
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
