import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/HomePage/Home";
import Attendance from "./pages/Attendance/Attendance";
import Setting from "./pages/Settings/Setting";
import Notification from "./pages/Notifications/Notification"
import UserManagement from "./pages/UserManagement/UserManagement"


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>

      <Routes>
        <Route path ="/" element = {<Home/>} />
        <Route path ="/user-management" element = {<UserManagement/>} />
        <Route path ="/attendance" element = {<Attendance/>} />
        <Route path ="/settings" element = {<Setting/>} />
        <Route path ="/notifications" element = {<Notification/>} />
        

      </Routes>
    </div>
    </Router>

    
  );
}

export default App;
