import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <li key={this.props.task.id}>
        <label>
          <input
            type="checkbox"
            checked={this.props.task.done}
            onChange={ () => this.props.changeDone(this.props.task.id) } />
          <span>{this.props.task.title}</span>
        </label>
      </li>
    );
  }
}
