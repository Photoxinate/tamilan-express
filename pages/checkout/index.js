import React from 'react';
import Cheque from '../../components/Cheque/Cheque';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import classes from './index.module.scss'

const index = () => {
  return (
    <div className={classes.wrap}>
      <CheckoutForm />
      <Cheque />
    </div>
  );
};

export default index;
