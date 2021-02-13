import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {

  return (
    <div className={classes.wrap}>
      <button onClick={props.onClicked}>{props.text}</button>
    </div>
  );
};

export default Button;
