import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { App } from './containers/App';
import reducerProject from './reducers/reducerProject';
// create store
const store = createStore(reducerProject);
// get element
var rootEle = document.getElementById('root');
// render
const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEle
);
// call render
render();
// subscribe
store.subscribe(render);