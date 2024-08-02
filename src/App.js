import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Landing from './pages/Landing';
import MailDetailPage from './pages/MailDetailPage';
import styles from './App.module.css';
import InboxContainer from './components/InboxContainer';
import MailDetail from './components/MailDetail';
import Header from './components/Header';
import AddTask from './components/AddTask';

const App = () => {
  const [authToken, setAuthTokenState] = useState(localStorage.getItem('token'));
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
  }, [isTablet]);

  useEffect(() => {
    if (authToken) {
      fetchTasks();
    }
  }, [authToken]);

  const fetchTasks = async () => {
    const res = await fetch('https://taskmanagementappserver.onrender.com/api/tasks', {
      headers: { 'x-auth-token': authToken }
    });
    const data = await res.json();
    if (currentTask === null && data) {
        setCurrentTask(data[0])
    }
    setTasks(data);
  };

  const addTask = async task => {
    const res = await fetch('https://taskmanagementappserver.onrender.com/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-auth-token': authToken },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    if(currentTask == null){
      setCurrentTask(data);
    }
  };

  const updateTask = async task => {
    const res = await fetch(`https://taskmanagementappserver.onrender.com/api/tasks/${task._id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-auth-token': authToken },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTasks(tasks.map(t => (t._id === task._id ? data : t)));
    setCurrentTask(data);
  };

  const deleteTask = async id => {
    if (currentTask?._id === id) setCurrentTask(null);
    await fetch(`https://taskmanagementappserver.onrender.com/api/tasks/${id}`, {
      method: 'DELETE',
      headers: { 'x-auth-token': authToken }
    });
    setTasks(tasks.filter(task => task._id !== id));
    if (currentTask == null && tasks) {
      setCurrentTask(tasks[0])
    }
  };

  const toggleTask = async id => {
    const res = await fetch(`https://taskmanagementappserver.onrender.com/api/tasks/${id}/toggleTask`, {
      method: 'POST',
      headers: { 'x-auth-token': authToken }
    });
    const data = await res.json();
    setTasks(tasks.map(task => (task._id === id ? data : task)));
    setCurrentTask(data);
  };

  const setAuthToken = token => {
    localStorage.setItem('token', token);
    setAuthTokenState(token);
  };

  const filteredTasks = tasks.filter(task => {
    const query = searchQuery.toLowerCase();
    return (
      task.name.toLowerCase().includes(query) ||
      task.status.toLowerCase().includes(query)
    );
  });

  return (
    <Router>
      <div className="App">
        <div className={`${styles.container}`}>
          <Navbar setCurrentTask={setCurrentTask} authToken={authToken} setAuthToken={setAuthToken} />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
            <Route path="/mailDetails" element={<MailDetailPage currentTask={currentTask} deleteTask={deleteTask} updateTask={updateTask} setCurrentTask={setCurrentTask} clearCurrent={() => setCurrentTask(null)} />} />
            <Route path="/addTask" element={<AddTask addTask={addTask} />} />
            <Route path="/editTask" element={<AddTask addTask={addTask} updateTask={updateTask} currentTask={currentTask} />} />
            <Route path="*" element={authToken ? (
              <div className='flex flex-col w-4/5 mx-auto'>
                <Header setSearchQuery={setSearchQuery} />
                <div className={`${styles.mainContainer}`}>
                  <InboxContainer tasks={filteredTasks} currentTask={currentTask} toggleTask={toggleTask} deleteTask={deleteTask} setCurrentTask={setCurrentTask} addTask={addTask} updateTask={updateTask} clearCurrent={() => setCurrentTask(null)} />
                  {currentTask && !isTablet && <MailDetail  currentTask={currentTask} deleteTask={deleteTask} updateTask={updateTask} setCurrentTask={setCurrentTask} clearCurrent={() => setCurrentTask(null)}/>}
                </div>
              </div>
            ) : (
              <Landing />
            )} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
