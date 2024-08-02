import React, { useEffect } from 'react';
import styles from './MailDetail.module.css';
import { Link } from 'react-router-dom';
import EditTaskButton from './EditTaskButton'
const MailDetail = ({currentTask, deleteTask}) => {
  const date = new Date(currentTask.createdAt);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formatedDate = date.toLocaleDateString('en-GB', options).replace(/\./g, '')
  const completedDate = new Date(currentTask.completedAt);
  const formatedCompletionDate = completedDate.toLocaleDateString('en-GB', options).replace(/\./g,'')
  return (
  <div className={`${styles.mailDetail} flex flex-col`}>
    <div className={styles.mailDetailHeader}>
      <div className={styles.mailDetailProfile}>
        <div className={styles.mailContentsSubject}>
          <div className={styles.mailContentsTitle}><b>Task</b> : {currentTask.name}</div>
        </div>
      </div>
      <div className={styles.mailIcons}>
        <EditTaskButton />
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => deleteTask(currentTask._id)} id={styles.delete} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
        </svg>
      </div>
    </div>
    <div className={styles.mailContents}>
      <div className={styles.mail}>
        <div className={`${styles.mailTime}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {
            formatedDate
          }
        </div>
        <div className={styles.mailInside}>
          <div>
            <b>Description : </b>
          </div>
          {currentTask.body}
        </div>
        {currentTask.status === 'completed' && <div className={styles.mailChecklist}>
          <hr ></hr>
          <br />
          <span>You completed this task on </span>
          <span className={styles.mailChecklistDate}>{formatedCompletionDate}</span>
        </div>}
      </div>
    </div>
  </div>
  )
};

export default MailDetail;
