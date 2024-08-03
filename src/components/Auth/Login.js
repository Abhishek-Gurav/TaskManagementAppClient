import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginIcon from "../../static/coding.png";
import Loader from "../Loader";
import styles from "./Login.module.css";

const Login = ({ setAuthToken }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      "https://taskmanagementappserver.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      setAuthToken(data.token);
      setLoading(false);
      navigate("/");
    } else {
      const data = await res.json();
      alert(data.msg);
      setLoading(false);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="flex flex-col items-center md:flex-row flex-1 mt-20">
      <div className="hidden md:flex justify-center items-center flex-initial w-1/2">
        <img className="w-1/2" src={loginIcon} alt="Login" />
      </div>
      <div className="container flex md:block justify-center mx-auto md:w-1/2 p-4">
        <div className="flex flex-col w-3/4">
          <h1 className={styles.text2xl}>Login</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label>Email</label>
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
            <div className="flex flex-col md:flex-row justify-between mt-5 items-center">
              <button type="submit" className={styles.btn}>
                Login
              </button>
              <span>
                <span className="text-gray-500">Don't have an account? </span>
                <Link to="/register" className="text-blue-500">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
