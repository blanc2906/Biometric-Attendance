import React from "react";
import { NavLink } from "react-router-dom"; 
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-link" activeClassName="active">
            Smart Acccess Control
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
              Quản lý người dùng
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/attendance" className="navbar-link" activeClassName="active">
              Lịch sử vào ra
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/settings" className="navbar-link" activeClassName="active">
              Cài đặt
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/notifications" className="navbar-link" activeClassName="active">
              Thông báo
            </NavLink>
          </li>
        </ul>

       
        <div className="navbar-user">
          <span className="username">Admin</span>
          <div className="user-avatar">
            <img src="avatar.png" alt="User Avatar" />
          </div>
          <NavLink to="/logout" className="navbar-link logout" activeClassName="active">
            Đăng xuất
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
