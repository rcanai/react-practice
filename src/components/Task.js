import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = props => (
  <li key={props.task.id} className="task-item">
    <label htmlFor={`task-done${props.task.id}`}>
      <input
        type="checkbox"
        checked={props.task.done}
        id={`task-done${props.task.id}`}
        onChange={() => props.changeDone(props.task.id)}
      />
      <span className={props.task.done ? 'done' : ''}>
        {props.task.title}
      </span>
    </label>
  </li>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    done: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
  changeDone: PropTypes.func.isRequired,
};

export default Task;
