import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes';
import ProductDetail from './ProductDetail/ProductDetail';
import { Close } from '../Icons/Icons';
import classes from './ProductModal.module.scss';

const ProductModal = (props) => {

  const dispatch = useDispatch()

  const closeModal = () => dispatch({type:actionTypes.CLOSE_MODAL})
  const show = useSelector(state => state.ui.show)
  const product = useSelector(state => state.ui.product)

  if (!show) {
    return null;
  }
  return (
    <div className={classes.wrap}>
      <div className={classes.productModal}>
        <button className={classes.closeBtn} onClick={closeModal}>
          <Close size="24" color="var(--accent)" />
        </button>
        <div className={classes.imgWrap}>
          <img src={product.img} alt={product} />
        </div>
        <ProductDetail product={product} setShow={props.setShow} />
      </div>
    </div>
  );
};

export default ProductModal;
