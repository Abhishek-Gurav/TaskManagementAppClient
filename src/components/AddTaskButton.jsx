import React from 'react';
import {Link} from 'react-router-dom';
import styles from './AddTaskButton.module.css';
const AddTaskButton = () => (
  <div className={styles.addTask}>
      <Link to="/addTask" className={`${styles.addButton} text-white inline-block`}>Add Task</Link>
  </div>
);

export default AddTaskButton;
