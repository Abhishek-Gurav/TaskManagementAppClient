import React from 'react';
import MailItem from './MailItem';
import AddTaskButton from './AddTaskButton';
import styles from './InboxContainer.module.css';

const InboxContainer = ({tasks,currentTask,addTask, setCurrentTask, deleteTask, toggleTask}) => (
  <div className={styles.inboxContainer}>
    <div className={styles.inbox}>
      {
        tasks.map((task) => {
          return (
            <MailItem
              key={task._id} 
              task={task} 
              currentTask={currentTask}
              setCurrentTask={setCurrentTask} 
              deleteTask={deleteTask} 
              toggleTask={toggleTask}
            />
          )
        })
      }
    </div>
    <AddTaskButton addTask={addTask} />
  </div>
);

export default InboxContainer;
