import React from 'react';
import { connect } from 'react-redux';
import CartTable from '../../components/CartTable/CartTable';
import SubTotal from '../../components/SubTotal/SubTotal';
import classes from './index.module.scss';

const index = (props) => {
  if (props.products === undefined || props.products.length === 0) {
    return <div>No item Added, Start Shopping</div>;
  } else {
    return (
      <div className={classes.wrap}>
        <div className={classes.colCart}>
          <CartTable />
        </div>
        <div className={classes.colSub}>
          <SubTotal />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.prdCart.products,
  };
};

export default connect(mapStateToProps)(index);
