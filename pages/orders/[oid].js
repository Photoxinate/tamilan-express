import React from 'react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import Item from 'semantic-ui-react/dist/commonjs/views/Item';
import { products } from '../../config/config';
import classes from './OrderView.module.scss';

const OrderView = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.orderDetailWrap}>
        <Item.Group divided>
          {products.map((product, i) => (
            <Item>
              <Item.Image src={product.img} />

              <Item.Content>
                <Item.Header as="a">{product.name}</Item.Header>
                <Item.Meta>
                  <span className={classes.price}>Price : {product.price}</span>
                </Item.Meta>
                <Item.Meta>
                  <span className={classes.qty}>Quantity : {product.qty}</span>
                </Item.Meta>
                <Item.Description>
                  <span className={classes.total}>
                    Total Amount : {product.price}
                  </span>
                </Item.Description>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </div>


      <div className={classes.chequeWrap}>

        <div className={classes.detailWrap}>
          <div className={classes.row}>
            <div>
              <b>Delivery Address:</b>
            </div>
            <div> 54, Dummy st., Dummy district, Dummy </div>
          </div>
          <div className={classes.row}>
            <div>
              <b>Deliver Status:</b>
            </div>
            <div>Delivered</div>
          </div>
        </div>

        <div className={classes.row}>
          <div className={classes.col}>Sub-total</div>
          <div className={classes.col}>$40.00</div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>Shipping</div>
          <div className={classes.col}>$ 0.00</div>
        </div>
        <hr />
        <div className={classes.row}>
          <div className={classes.col}>Total</div>
          <div className={classes.col}>$ 40.00</div>
        </div>
      </div>
    </div>
  );
};


export default OrderView;
