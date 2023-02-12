import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          useContext
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              login
            </NavLink>
            <NavLink
              to="/todoApp"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              TodoApp
            </NavLink>
            <NavLink
              to="/example"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Example 1
            </NavLink>
            <NavLink
              to="/example2"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Example 2
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
