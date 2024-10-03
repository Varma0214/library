
import React from 'react';
import './SearchBar.css'; 

function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title, author, or genre..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
