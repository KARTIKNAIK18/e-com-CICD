import React from 'react';
import '../styles/searchBar.css'; // ✅ Ensure path is correct

const SearchBar = ({ setSearchQuery }) => {
    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search products..."
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
    );
};

export default SearchBar;
