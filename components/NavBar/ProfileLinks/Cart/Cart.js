import React from 'react';
import Link from 'next/link';
import { CartIcon } from '../../../Icons/Icons';
import classes from '../ProfileLinks.module.scss';

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <div className={classes.count}>{props.products.length}</div>
      <Link href="/cart">
        <button>
          <CartIcon size="24" color="var(--white)" />
        </button>
      </Link>
    </div>
  );
};

export default Cart;
