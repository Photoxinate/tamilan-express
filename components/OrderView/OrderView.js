import React from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import Item from 'semantic-ui-react/dist/commonjs/views/Item';
import classes from './OrderView.module.scss';

const OrderView = ({ products }) => {
  return (
    <div className={classes.wrap}>
      <Item.Group divided>
        {products.map((product, i) => (
          <Item>
            <Item.Image src={product.img} width="200" heigh="200" alt={product.alt} />
            <Item.Content>
              <Item.Header as="a">{product.name}</Item.Header>
              <Item.Meta>
                <span className="cinema">Total Amount : {product.price}</span>
              </Item.Meta>
              {/* <Item.Description>{paragraph}</Item.Description> */}
              <Item.Extra>
                <Label>Delivered</Label>
                <Button primary floated="right">
                  View More
                  <Icon name="right chevron" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  );
};

export default OrderView;
