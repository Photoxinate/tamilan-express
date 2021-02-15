import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {

  return (
    <div className={classes.wrap}>
      <button onClick={props.onClicked}><a>{props.text}</a></button>
    </div>
  );
};

export default Button;
