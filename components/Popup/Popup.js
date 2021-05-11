import React, { useState } from 'react';
import { X } from '../Icons/Icons';
import classes from './Popup.module.scss';

export const Popup = ({ popup }) => {

  const [showPopup, setshowPopup] = useState(true)
  const onClose = () => {
    (typeof window != 'undefined')?localStorage.setItem('isPopup', false):null
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
          src={'https://media.tamilanexpress.ca/popup/original/' + popup.popup}
          alt="popup image"
        />
      </div>
    </div>
  );
};

export default Popup;
