import React from 'react';
import SearchBar from './SearchBar';
import styles from './Header.module.css';

const Header = ({ setSearchQuery }) => (
  <div className={styles.header}>
    <SearchBar setSearchQuery={setSearchQuery} />
  </div>
);

export default Header;
