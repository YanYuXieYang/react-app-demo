import React, { Component } from 'react';
import { projectType } from '../actions';

class ProjectComp extends Component {
  constructor(props) {
    super(props);
    this.func1 = this.func1.bind(this);
    this.func2 = this.func2.bind(this);
  }
  func1 () {
    this.props.func1({ type: projectType.Type1 });
  }
  func2 () {
    this.props.func2({ type: projectType.Type2 });
  }

  render () {
    var value = this.props.value;
    return (
      <div>
        <div>project 测试</div>
        <p>count:{value}</p>
        <button onClick={this.func1}>加</button>
        <button onClick={this.func2}>减</button>
      </div>
    );
  }
}

export default ProjectComp;