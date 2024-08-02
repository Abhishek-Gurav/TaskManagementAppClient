import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginIcon from "../../static/coding.png";
import styles from "./Login.module.css";

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '', password2: '' });
  const navigate = useNavigate();

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match');
      return;
    }

    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    if (res.ok) {
      navigate('/login');
    } else {
      const data = await res.json();
      alert(data.msg);
    }
  };

  return (
    <div className="flex flex-col items-center md:flex-row flex-1 mt-20">
      <div className="hidden md:flex justify-center items-center flex-initial w-1/2">
        <img className="w-1/2" src={loginIcon} alt="Example SVG" />
      </div>
      <div className="container flex md:block justify-center mx-auto md:w-1/2 p-4">
        <div className="flex flex-col w-3/4">
          <h1 className={styles.text2xl}>Register</h1>
          <form onSubmit={onSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <div className="mb-4">
              <label className={styles.block}>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <div className="mb-4">
              <label className={styles.block}>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <div className="mb-4">
              <label className={styles.block}>Confirm Password</label>
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-5 items-center">
              <button type="submit" className={styles.btn}>
                Register
              </button>
              <span>
                <span className="text-gray-500">Have an account? </span>
                <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
