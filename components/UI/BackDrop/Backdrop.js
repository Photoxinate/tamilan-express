import React from 'react';
import classes from './Backdrop.module.scss';


const Backdrop = ({clicked, show}) => (
    show ? <div className={classes.Backdrop} onClick={clicked} onTouchEnd={clicked} /> : null
);

export default Backdrop;