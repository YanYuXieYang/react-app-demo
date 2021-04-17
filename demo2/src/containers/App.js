import { connect } from "react-redux";
import { projectType } from "../actions";
import ProjectComp from '../components/ProjectComp'

function mapStateToProps (state) {
  return { value: state };
}

function mapDispatchToProps (dispatch) {
  return {
    func1: () => dispatch({
      type: projectType.Type1
    }),
    func2: () => dispatch({
      type: projectType.Type2
    })
  }
}


export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectComp);