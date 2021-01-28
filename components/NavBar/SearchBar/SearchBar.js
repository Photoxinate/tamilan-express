import React from 'react';
import classes from './SearchBar.module.scss';

const SearchBar = (props) => {
  return (
    <div className={classes.wrap}>
      <select value="Radish">
        <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option>
      </select>
    </div>
  );
};

export default SearchBar