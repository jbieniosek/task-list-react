import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './TaskForm.css';

const TaskForm = ({ onSubmitCallback}) => {
  const [taskText, changeTaskText] = useState('');
  const [taskDone, changeTaskDone] = useState(false);

  const onChangeTask = (event) => {
      changeTaskText(event.target.value);
  };

  const onChangeDone = (event) => {
      console.log("Getting in here!");
      changeTaskDone(!taskDone);
  };

  const onSubmitFn = (event) => {
    event.preventDefault();
    onSubmitCallback(taskText, taskDone);
  };





  return (
    <form onSubmit={onSubmitFn}>
        <label htmlFor='taskText'>New Task:</label>
        <input type='text' name='taskText' value={taskText} onChange={onChangeTask}/>
        <label htmlFor='taskDone'>Done?</label>
        <input type='checkbox' name='taskDone' checked={taskDone} onChange={onChangeDone}/>
        
        <br/><input type='submit' name='submit' value='Add Task'/>
    </form>
  );
};

TaskForm.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
};

export default TaskForm;
