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
    <button
      type="button"
      className="remove-task"
      onClick={() => props.removeTask(props.task.id)}
    >
      &times;
    </button>
  </li>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
  changeDone: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default Task;
