import React from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import Item from 'semantic-ui-react/dist/commonjs/views/Item';
import Link from 'next/link';
import { products } from '../../config/config'
import classes from './index.module.scss';

const OrderView = () => {
  return (
    <div className={classes.wrap}>
      <Item.Group divided>
        {products.map((product, i) => (
          <Item>
            <Item.Content>
              <Item.Header as="a">10/10/2020</Item.Header>
              <Item.Meta>
                <span className="cinema">Total Amount : {product.price}</span>
              </Item.Meta>
              <Item.Description>Deliver Address : 54, Dummy st., Dummy</Item.Description>
              <Item.Extra>
                <Label>Delivered</Label>
                <Link href={'/orders/' + product.id}>
                  <a>
                    <Button primary floated="right">
                      View More
                      <Icon name="right chevron" />
                    </Button>
                  </a>
                </Link>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  );
};

export default OrderView;
