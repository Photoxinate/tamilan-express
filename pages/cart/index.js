import React from 'react';
import { connect } from 'react-redux';
import CartTable from '../../components/CartTable/CartTable';
import Cheque from '../../components/Cheque/Cheque';
import classes from './Cart.module.scss';

const index = (props) => {
  if ((props.products === undefined || props.products.length === 0)) {
    return <div>No item Added, Start Shopping</div>;
  } else {
    return (
      <div className={classes.wrap}>
        <CartTable />
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
