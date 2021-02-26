import React from 'react';
import { contact } from '../../../../config/config';
import classes from './ContactDetail.module.scss';

const ContactDetail = () => {
  return (
    <div className={classes.wrap}>
      <h1>Contact us</h1>
      <div className={classes.detailWrap}>
        <div className={classes.label}>Phone </div>
        <div className={classes.value}>{contact.phone}</div>
      </div>
      <div className={classes.detailWrap}>
        <div className={classes.label}>E-mail </div>
        <div className={classes.value}>{contact.email}</div>
      </div>
      <div className={classes.detailWrap}>
        <div className={classes.label}>Address </div>
        <div className={classes.value}>{contact.address}</div>
      </div>
      <div className={classes.detailWrap}>
        <div className={classes.label}>Store hours </div>
        <div className={classes.value}>
          {contact.openHours.weekdays}
          <br />
          {contact.openHours.weekend}
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
