import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './AddTask.module.css';

const AddTask = ({ addTask, updateTask, currentTask }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState(currentTask ? currentTask.name : '');
  const [message, setMessage] = useState(currentTask ? currentTask.body : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      _id: currentTask?._id,
      name: title,
      body: message,
      status: currentTask?.status || "pending"
    };

    if (currentTask) {
      updateTask(data);
    } else {
      addTask(data);
    }

    navigate('/');
  };

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.name);
      setMessage(currentTask.body);
    }
  }, [currentTask]);

  return (
    <div id="wrapper" className={styles.wrapper}>
      <div id="note-editor" className={styles.noteEditor}>
        <h2 id="note-editor-title" className={styles.noteEditorTitle}>
          {currentTask ? 'Edit Task' : 'Create Task'}
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="title" className={styles.label}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
          <label htmlFor="message" className={styles.label}>Body:</label>
          <textarea
            rows="10"
            cols="42"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
          ></textarea>
          <div id="button" className={styles.buttonContainer}>
            <button type="submit" id="addBtn" className={styles.addBtn}>
              {currentTask ? 'Update' : 'Create'}
            </button>
            <div id="error" className={styles.error}></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
