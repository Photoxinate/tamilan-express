import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {

  return (
    <div className={classes.wrap}>
      <button>{props.text}</button>
    </div>
  );
};

export default Button;
