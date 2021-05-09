import React, { useState } from 'react';
import { X } from '../Icons/Icons';
import classes from './Popup.module.scss';

export const Popup = ({ image }) => {

  const [showPopup, setshowPopup] = useState(true)

  const onClose = () => {
    // (typeof window != 'undefined')?localStorage.setItem('isPopup', false):null
    setshowPopup(false)
  }
  return (
    showPopup && <div className={classes.background}>
      <div className={classes.container}>
        <button
          className={classes.closeBtn}
          onClick={onClose}
        >
          <X size="18" color="white" />
        </button>
        <img
        //   src={'https://media.tamilanexpress.ca/product/thumb400/' + image}
        src="https://images.unsplash.com/photo-1605645929050-1ce8023c1368?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbm5lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt="popup image"
        />
      </div>
    </div>
  );
};

export default Popup;
