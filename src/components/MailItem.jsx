import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MailItem.module.css';

const MailItem = ({ task, currentTask, setCurrentTask, deleteTask, toggleTask }) => {
  const date = new Date(task.createdAt);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options).replace(/\./g, '');

  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentTask(task);
    if (window.innerWidth <= 768) {
      navigate('/mailDetails');
    }
  };

  return (
    <div
      className={`${styles.msg} ${task === currentTask ? styles.selectedBg : ''} ${styles.animY}`}
    >
      <input
        onClick={() => { toggleTask(task._id); }}
        type="checkbox"
        name="msg"
        id={task._id}
        className={styles.mailChoice}
        checked={task.status === 'completed'}
      />
      <label htmlFor={task._id}></label>
      <div onClick={handleClick} className={styles.msgContent}>
        <div className={styles.msgTitle}>{task.name}</div>
        <div className={styles.msgDate}>{formattedDate}</div>
      </div>
    </div>
  );
};

export default MailItem;
