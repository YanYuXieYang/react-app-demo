import { projectType } from '../actions';

var reducerProject = (state = 0, action) => {
  switch (action.type) {
    case projectType.Type1:
      return state + 1;
    case projectType.Type2:
      return state - 1;
    default:
      return state;
  }
}

export default reducerProject;