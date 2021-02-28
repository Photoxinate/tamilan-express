import React from 'react';
import OrderView from '../../components/OrderView/OrderView';
import { products } from '../../config/config';
import classes from './index.module.scss';

const index = () => {
  return (
    <div className={classes.wrap}>
      <OrderView products={products} />
    </div>
  );
};

export default index;
