import React from 'react';
import { CartIcon } from '../../../Icons/Icons';
import classes from '../ProfileLinks.module.scss';

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <button>
        <CartIcon size="24" color="var(--white)" />
      </button>
    </div>
  );
};

export default Cart;
