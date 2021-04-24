import React, { useEffect, useState } from 'react';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import Table from 'semantic-ui-react/dist/commonjs/collections/Table';
import Item from 'semantic-ui-react/dist/commonjs/views/Item';
import classes from './OrderView.module.scss';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import axios from '../../axios';
import Loading from '../../components/UI/Loading/Loading';

const OrderView = () => {
  const router = useRouter();
  const { oid } = router.query;
  const [order, setOrder] = useState();
  const [error, setError] = useState(false);
  const [session, loading] = useSession();

  useEffect(() => {
    if (!session) {
      router.replace('/signin');
    }
    if (session) {
      const headers = { Authorization: `Bearer ${session.accessToken}` };

      axios.get('orders/me/' + oid, { headers }).then(
        (res) => {
          setOrder(res.data);
        },
        (error) => {
          setError(true);
        }
      );
    }
  }, [session]);

  if (loading) {
    return <Loading complete />;
  }
  if (error) {
    return 'No product found!';
  }
  if (!order) {
    return 'No orders yet!';
  }

  return (
    <div className={classes.wrap}>
      <div className={classes.orderDetailWrap}>
        <Item.Group divided>
          {order.products.map((product, i) => (
            <Item key={product._id}>
              <Item.Image
                // src={`https://media.tamilanexpress.ca/product/thumb200/${product.product.image[0]}`}
                src="https://workmacro.com/wp-content/uploads/2018/02/1-by-1-1024x1024.png"
                alt={'image of ' + product.product.name}
              />
              <Item.Content>
                <Item.Header as="a">{product.product.name}</Item.Header>
                <Item.Meta>
                  <span>Price : {product.price}</span>
                </Item.Meta>
                <Item.Meta>
                  <span>Quantity : {product.qty}</span>
                </Item.Meta>
                {product.variations
                  ? product.variations.map((vari) => (
                      <Item.Extra>
                        <Label>
                          {vari.name}
                          <Label.Detail>{vari.value}</Label.Detail>
                        </Label>
                      </Item.Extra>
                    ))
                  : null}
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </div>

      <div className={classes.chequeWrap}>
        <Table definition >
          <Table.Body>
            <Table.Row>
              <Table.Cell width={2}>Order Status</Table.Cell>
              <Table.Cell>{order.status}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Shipping Method</Table.Cell>
              <Table.Cell>{order.shippingMethod.toUpperCase()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Delivery Address</Table.Cell>
              <Table.Cell>
                {order.deliveryAddress.name
                  ? order.deliveryAddress.name 
                  : null} <br />
                {order.deliveryAddress.street1
                  ? order.deliveryAddress.street1
                  : null}
                {order.deliveryAddress.street2
                  ? ', ' + order.deliveryAddress.street2
                  : null}
                {order.deliveryAddress.city
                  ? ', ' + order.deliveryAddress.city
                  : null}
                {order.deliveryAddress.state
                  ? ', ' + order.deliveryAddress.state
                  : null}
                {order.deliveryAddress.zipCode
                  ? ', ' + order.deliveryAddress.zipCode
                  : null}
                {order.deliveryAddress.country
                  ? ', ' + order.deliveryAddress.country
                  : null}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Earned points</Table.Cell>
              <Table.Cell>{order.earnedPoints}</Table.Cell>
            </Table.Row>
            {order.coupon && (
              <Table.Row>
                <Table.Cell>Coupon</Table.Cell>
                <Table.Cell>{order.coupon}</Table.Cell>
              </Table.Row>
            )}
            <Table.Row>
              <Table.Cell>Sub total</Table.Cell>
              <Table.Cell>{order.subTotal}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={2}>Grand Total</Table.Cell>
              <Table.Cell>{order.grandTotal}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default OrderView;
