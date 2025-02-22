// src/components/SearchBar.jsx
import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      {props.children}
    </div>
  );
};

export default SearchBar;