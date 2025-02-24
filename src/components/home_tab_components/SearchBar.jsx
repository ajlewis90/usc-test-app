// src/components/SearchBar.jsx
import React from 'react';
import './SearchBar.css';
import SearchIcon from './SearchIcon';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <SearchIcon />
    </div>
  );
};

export default SearchBar;