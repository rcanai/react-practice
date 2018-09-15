import React from 'react';
import PropTypes from 'prop-types';
import './TaskForm.css';

const TaskForm = props => (
  <div className="task-form">
    <input
      type="text"
      value={props.text}
      onChange={props.updateValue}
      placeholder="新しいタスク"
    />
    <button
      type="button"
      onClick={props.addTask}
    >
      追加
    </button>
  </div>
);

TaskForm.propTypes = {
  text: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
