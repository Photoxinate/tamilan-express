import React from 'react';
import Button from "semantic-ui-react/dist/commonjs/elements/Button"
import classes from './Button.module.scss';

const CustomButton = (props) => {

  return (
    <div className={classes.wrap}>
      <Button onClick={props.onClicked}>{props.text}</Button>
    </div>
  );
};

export default CustomButton;
