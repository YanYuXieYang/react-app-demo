import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import ProjectComp from './components/ProjectComp';
import reducerProject from './reducers/reducerProject';
// create store
const store = createStore(reducerProject);
// get element
var rootEle = document.getElementById('root');
// render
const render = () => ReactDOM.render(
  <ProjectComp
    value={store.getState()}
    vstore={store}>
  </ProjectComp>,
  rootEle
);
// call render
render();
// subscribe
store.subscribe(render);