import React, { useState } from "react";
import SearchBar from "../../components/Searchbar";
import './Attendance.css';

function Attendance() {
 
  const [accessData] = useState([
    { id: 1, user: "John Doe", time: "2024-11-17 08:30 AM", status: "Success", action: "Open" },
    { id: 2, user: "Jane Smith", time: "2024-11-16 02:15 PM", status: "Failure", action: "Close" },
    { id: 3, user: "Samuel Green", time: "2024-11-15 11:45 AM", status: "Success", action: "Open" },
    { id: 4, user: "Alice Brown", time: "2024-11-17 09:00 AM", status: "Success", action: "Close" },
    { id: 5, user: "Charlie Black", time: "2024-11-16 05:20 PM", status: "Failure", action: "Open" },
  ]);

  
  const [searchTerm, setSearchTerm] = useState(""); 
  const [activeTab, setActiveTab] = useState("all"); 

  
    const filteredData = accessData.filter(entry => {
    const matchesSearch = entry.user.toLowerCase().includes(searchTerm.toLowerCase());

    
    if (activeTab === "all") {
      return matchesSearch;
    }
    const entryDate = new Date(entry.time);
    const today = new Date();

    if (activeTab === "today") {
      return matchesSearch && entryDate.toDateString() === today.toDateString();
    }

    if (activeTab === "week") {
      const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
      return matchesSearch && entryDate >= startOfWeek;
    }

    return matchesSearch;
  });

  return (
    <div className="attendance-container">
      <SearchBar
        placeholder="Search by user name..."
        onSearch={setSearchTerm} 
      />

      <h2>Attendance Logs</h2>

     
      <div className="tabs">
        <button onClick={() => setActiveTab("all")} className={activeTab === "all" ? "active" : ""}>All Entries</button>
        <button onClick={() => setActiveTab("today")} className={activeTab === "today" ? "active" : ""}>Today</button>
        <button onClick={() => setActiveTab("week")} className={activeTab === "week" ? "active" : ""}>This Week</button>
      </div>

     
      <div className="attendance-list">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.id}</td>
                  <td>{entry.user}</td>
                  <td>{entry.time}</td>
                  <td>{entry.status}</td>
                  <td>{entry.action}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
