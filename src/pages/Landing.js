import React from 'react';
import styles from './Landing.module.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>Welcome to Task Manager</h1>
          <p>Organize your tasks efficiently and stay productive. Manage your to-dos, set priorities, and achieve your goals with our intuitive task management tool.</p>
          <Link to="/login" className="text"><button>Get Started</button></Link>
        </div>
        <div className={`${styles.image} md:block hidden`}>
          <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Task Management" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
