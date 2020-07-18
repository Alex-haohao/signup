import React from 'react';
import ReactDOM from 'react-dom';

import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware, } from "redux"
import rootReducer from "./reducers"
import { Provider } from "react-redux"

import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routers'
import Navgationbar from './components/signup/navigationbar.jsx'
import FlashMessagesList from './components/flash/flashMessagesList'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

ReactDOM.render(

  <Provider store={store}>
    <Router routes={routes}>
    <Navgationbar/>
    <FlashMessagesList/>
      {routes}
    </Router>

  </Provider>
  

  ,
  document.getElementById('root')
);
