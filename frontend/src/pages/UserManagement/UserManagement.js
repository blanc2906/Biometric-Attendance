import React, { useState } from "react";
import SearchBar from "../../components/Searchbar";
import './UserManagement.css';

function UserManagement() {
 
  const [users] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Samuel Green", email: "samuelgreen@example.com", role: "Admin", status: "Active" },
    { id: 5, name: "Alice Brown", email: "alicebrown@example.com", role: "User", status: "Inactive" },
    { id: 6, name: "Alice Brown", email: "alicebrown@example.com", role: "User", status: "Inactive" },
    { id: 7, name: "Alice Brown", email: "alicebrown@example.com", role: "User", status: "Inactive" },
    { id: 8, name: "Alice Brown", email: "alicebrown@example.com", role: "User", status: "Inactive" },
    { id: 9, name: "Alice Brown", email: "alicebrown@example.com", role: "User", status: "Inactive" },
    { id: 10, name: "Alice Brown", email: "alicebrown@example.com", role: "User", status: "Inactive" },
    { id: 11, name: "Alice Brown", email: "alicebrown@example.com", role: "User", status: "Inactive" },
  ]);

  
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("table"); 
  const [filter, setFilter] = useState("all"); 

 
  const filteredUsers = users.filter(user => {
    
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());

    
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && user.status === "Active") ||
      (filter === "inactive" && user.status === "Inactive") ||
      (filter === "admin" && user.role === "Admin") ||
      (filter === "user" && user.role === "User");

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="user-management">
      <SearchBar
        placeholder="Search users by name..."
        onSearch={setSearchTerm} 
      />
      
      <h2>Welcome to User Management Page</h2>

      
      

      
      <div className="view-mode-toggle">
        <button onClick={() => setViewMode("table")}>Table View</button>
        <button onClick={() => setViewMode("list")}>List View</button>
      </div>

      <div className="filter-section">
        <label>Filter by: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All Data</option>
          <option value="active">Active Accounts</option>
          <option value="inactive">Inactive Accounts</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      
      {viewMode === "table" ? (
        <div className="user-list">
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        
        <div className="user-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="user-card">
                <div className="user-info">
                  <h3>{user.name}</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Role:</strong> {user.role}</p>
                  <p><strong>Status:</strong> {user.status}</p>
                  <p><strong>ID:</strong> {user.id}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default UserManagement;
