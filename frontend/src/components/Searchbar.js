import React, { useState } from "react";
import "../styles/Searchbar.css";
import 'font-awesome/css/font-awesome.min.css';

function SearchBar({ placeholder, onSearch, avatarUrl, avatarAlt }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm); // Gửi giá trị tìm kiếm ra ngoài qua callback
    }
  };

  return (
    <div className="search-bar">
     
      <div className="search-section">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder || "Search..."}
        />
        <button onClick={handleSearch}>Search</button>
        

        <div className="avatar-container">
        <i className="fa fa-bell bell-icon"></i>
        <img 
          src={avatarUrl || 'https://via.placeholder.com/40'} 
          alt={avatarAlt || 'User Avatar'}
          className="avatar"
        />
        <span className="Admin">Admin</span>
        </div>

      </div>

      
      
    </div>
  );
}

export default SearchBar;
