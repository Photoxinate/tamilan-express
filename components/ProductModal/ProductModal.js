import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import * as actionTypes from '../../store/actions/actionTypes';
import { X } from '../Icons/Icons';
import ProductDetail from './ProductDetail/ProductDetail';
import classes from './ProductModal.module.scss';

const ProductModal = ({ setShow }) => {
  const dispatch = useDispatch();

  const { addToast } = useToasts();

  const closeModal = () => dispatch({ type: actionTypes.CLOSE_MODAL });

  const show = useSelector((state) => state.ui.show);
  const product = useSelector((state) => state.ui.product);
  const message = useSelector((state) => state.cart.message);

  useEffect(() => {
    if (message) {
      const appearance = message.includes('removed')
        ? 'warning'
        : message.includes('updated')
        ? 'info'
        : 'success';
      addToast(message, { appearance });
    }
  }, [message]);

  if (!show) {
    return null;
  }
  return (
    <div className={classes.wrap}>
      <div className={classes.productModal}>
      {product.type === 'buy 1 get 1 free' ? (
              <Label as="a" color="red" ribbon className={classes.customLabel}>
                Buy 1 get 1 free
              </Label>
          ) : null}

          {product.type === 'buy 1 get 2nd off' ? (
              <Label as="a" color="red" ribbon className={classes.customLabel}>
                Buy 1 get 2nd {product.offDiscount} off
              </Label>
          ) : null}
        <button className={classes.closeBtn} onClick={closeModal}>
          <X size="18" color="white" />
        </button>
        <div className={classes.imgWrap}>
          <img
            // src={product.image[0]}
            src="https://workmacro.com/wp-content/uploads/2018/02/1-by-1-1024x1024.png"
            alt={'image of ' + product.name}
            // width='150'
            // height='150'
          />
        </div>
        <ProductDetail product={product} setShow={setShow} />
      </div>
    </div>
  );
};

export default ProductModal;
