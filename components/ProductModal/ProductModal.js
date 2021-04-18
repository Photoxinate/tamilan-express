import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes';
import ProductDetail from './ProductDetail/ProductDetail';
import { X } from '../Icons/Icons';
import classes from './ProductModal.module.scss';
import { useToasts } from 'react-toast-notifications';

const ProductModal = ({setShow}) => {

  const dispatch = useDispatch()

  const { addToast } = useToasts()

  const closeModal = () => dispatch({type:actionTypes.CLOSE_MODAL})

  const show = useSelector(state => state.ui.show)
  const product = useSelector(state => state.ui.product)
  const message = useSelector(state => state.cart.message)

  useEffect(() => {
    if(message) {
      const appearance = message.includes('removed') ? 'warning' : message.includes('updated') ? 'info' : 'success'
      addToast(message, { appearance })
    }
  }, [message])

  if (!show) {
    return null;
  }
  return (
    <div className={classes.wrap}>
      <div className={classes.productModal}>
        <button className={classes.closeBtn} onClick={closeModal}>
          <X size="18" color='white' />
        </button>
        <div className={classes.imgWrap}>
          <img src={product.image[0]} alt={"image of "+product.name} />
        </div>
        <ProductDetail product={product} setShow={setShow} />
      </div>
    </div>
  );
};

export default ProductModal;
