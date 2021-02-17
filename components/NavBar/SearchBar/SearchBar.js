import React from 'react';
import classes from './SearchBar.module.scss';

const SearchBar = (props) => {


  return (
    <div className={classes.wrap}>
      <input/>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
