import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';
import ProductPrice from '../ProductPrice/ProductPrice';
import Quantity from '../../UI/Quantity/Quantity';
import useTranslation from 'next-translate/useTranslation';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Link from 'next/link';
import classes from './ProductDetail.module.scss';

const ProductDetail = ({ product, ...props }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation('common');

  const [qty, setQty] = useState(product.qty);

  const onAddProduct = (product, qty) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: { product: product, qty: qty },
    });
  };

  return (
    <div className={classes.prodDetail}>
      <div className={classes.prodCategory}>{product.category}</div>
      <div className={classes.prodName}>{product.name}</div>
      <ProductPrice price={product.price} discount={product.discount} />
      <div className={classes.itemWrap}>
        Stock :<span className={classes.prodStock}> In Stock </span>
      </div>
      <div className={classes.itemWrap}>
        Weight : <span className={classes.prodWeight}>{product.weight}</span>
      </div>
      <div className={classes.qtyWrap}>
      <Quantity
        qty={qty}
        id={product.id}
        onChangeQty={props.onChangeQty}
        setQty={setQty}
        max={product.maxQty}
      />
      </div>
      
      <div className={classes.productBuy}>
        <Button
          primary
          content={t('add-to-cart')}
          onClick={() => onAddProduct(product, qty)}
        />
        <Link href="/cart">
          <a>
            <Button primary content={t('Buy-now')} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
