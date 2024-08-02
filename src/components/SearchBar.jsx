import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ setSearchQuery }) => (
  <div className={styles.searchBar}>
    <input 
      type="text" 
      placeholder="Search by title or status..." 
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
);

export default SearchBar;
