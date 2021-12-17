import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Task.css';

const Task = ({ id, text, done, showDesc, toggleFn, deleteFn, descFn }) => {
    console.log('inside task id = ' + id + ' done = ' + done);
  //const [isDone, setIsDone] = useState(done);
  const buttonClass = done ? 'tasks__item__toggle--completed' : '';

  let displayText = text;
  if(!showDesc) {
      displayText = '';
  }
  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => {toggleFn(id);}}
      >
        {displayText}
      </button>

      <button
        className="tasks__item__remove button alert pull-right"
        data-testid={`delete button ${id}`}
        onClick={() => {deleteFn(id)}}
      >
        <i className="fa fa-times">
          <FontAwesomeIcon icon={faTimes} />
        </i>
      </button>
      <button onClick={() => descFn(id)}>show desc</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  toggleFn: PropTypes.func.isRequired,
  deleteFn: PropTypes.func.isRequired,
  showDesc: PropTypes.bool.isRequired,
  descFn: PropTypes.func.isRequired
};

export default Task;
