import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Link from 'next/link'
import ProductDetail from './ProductDetail/ProductDetail';
import Quantity from '../UI/Quantity/Quantity'
import Modal from 'semantic-ui-react/dist/commonjs/modules/Modal';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

export const ProductModal = ({ product, ...props }) => {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);

  const onOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const onClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const addToCart = (e, prod, qty) => {
    props.onAddProduct(prod, qty);
    setOpen(false);
  };

  return (
    <Modal
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      trigger={<Button>Add to Cart</Button>}
    >
      <Modal.Content image>
        <Image size="medium" src={product.img} alt={product.alt} wrapped />
        <Modal.Description>
          <Header>{product.name}</Header>
          <ProductDetail product={product} />
          <Quantity max={product.maxQuantity} qty={qty} setQty={setQty} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => addToCart(product, qty)}>Continue Shopping</Button>
        <Link href="/cart">
          <Button
            content="Check Out"
            labelPosition="right"
            icon="checkmark"
            onClick={() => addToCart(e, product, qty)}
            positive
          />
        </Link>
      </Modal.Actions>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (product, qty) =>
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: { product: product, qty: qty },
      }),
    onRemoveProduct: (id) =>
      dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: { id: id } }),
  };
};

export default connect(null, mapDispatchToProps)(ProductModal);

