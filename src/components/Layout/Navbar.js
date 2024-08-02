import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
const Navbar = ({ setCurrentTask, authToken, setAuthToken }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    setAuthToken(null);
    localStorage.removeItem("token");
    setCurrentTask(null);
    navigate("/login");
  };

  return (
    <header>
      <div className="container">
        <a href="/" className="logo">
          Task <b>Manager</b>
        </a>
        <ul className="links">
          {authToken ? (
            <>
              <Link to="/" className="text">
                <li>Tasks</li>
              </Link>
              <li>
                <button onClick={onLogout} className="text-white lastLink">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <Link to="/" className="text">
                <li>Home</li>
              </Link>
              <Link to="/login" className="text-white">
                <li className="lastLink">Login</li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
