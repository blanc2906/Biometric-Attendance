import React from "react";
import { NavLink } from "react-router-dom"; 
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-link" activeClassName="active">
            Smart Access Control
          </NavLink>
        </div>

        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/" className="navbar-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/user-management" className="navbar-link" activeClassName="active">
              User
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/attendance" className="navbar-link" activeClassName="active">
              Attendance
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/settings" className="navbar-link" activeClassName="active">
              Setting
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/notifications" className="navbar-link" activeClassName="active">
              Notification
            </NavLink>
          </li>
        </ul>

        
        <div className="navbar-user">
          <span className="username">Admin</span>
          <div className="user-avatar">
            <img src="avatar.png" alt="User Avatar" />
          </div>
          <NavLink to="/logout" className="navbar-link logout" activeClassName="active">
            Log out
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
