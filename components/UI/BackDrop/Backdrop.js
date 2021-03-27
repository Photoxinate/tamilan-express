import React from 'react';
import classes from './Backdrop.module.scss';


const Backdrop = ({ clicked, show, style }) => (
    show ? <div className={classes.Backdrop} onClick={clicked} onTouchEnd={clicked} style={style} /> : null
);

export default Backdrop;