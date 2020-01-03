import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./Reducer";
import initial from "./initial";

const store = createStore(
     reducer, 
     initial,
     window.__REDUX_DEVTOOLS_EXTENSION__
     && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = () => {
     // let state = store.getState();
     ReactDOM.render(
          <Provider store={ store }>
               <App />
          </Provider>,
          document.getElementById("root")
     ); 
};

store.subscribe(render);
render(); 
