import React from 'react';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import classes from './SearchBar.module.scss';

const SearchBar = (props) => {


  return (
    <div className={classes.wrap}>
        <Input fluid action='Search' placeholder='Search...' />
    </div>
  );
};

export default SearchBar;
