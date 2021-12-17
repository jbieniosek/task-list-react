import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, toggleFn, deleteFn, descFn }) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task key={task.id} id={task.id} text={task.text} 
            done={task.done} showDesc={task.showDesc} 
            toggleFn={toggleFn} deleteFn={deleteFn} descFn={descFn} />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleFn: PropTypes.func,
  deleteFn: PropTypes.func,
  descFn: PropTypes.func
};

export default TaskList;
