import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initial = {
     players: [],
};

const addPlayer = (state, action) => ({
     ...state,
     players: [...state.players, action.players],
});

const reducer = (state, action) => {
     switch (action.type) {
          case "addPlayer": return addPlayer(state, action);
          default: return state;
     }
};

const store = createStore(
     reducer, 
     initial,
     window.__REDUX_DEVTOOLS_EXTENSION__
     && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = () => {
     let state = store.getState();
     ReactDOM.render(
          <Provider store={ store }>
               <App />,
          </Provider>,
          document.getElementById("root")
     ); 
};

store.subscribe(render);
render(); 
