import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import { Provider } from "react-redux";
import reducer from "./Reducer";
import initial from "./initial";

const composeEnhancers =
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
     
const store = createStore(
     reducer,
     initial,
     composeEnhancers(persistState())
);

const render = () => {
     ReactDOM.render(
          <Provider store={ store }>
               <App />
          </Provider>,
          document.getElementById("root")
     ); 
};

store.subscribe(render);
render(); 
