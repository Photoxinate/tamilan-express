import React from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import Item from 'semantic-ui-react/dist/commonjs/views/Item';
import Link from 'next/link';
import classes from './index.module.scss';
import { getSession } from 'next-auth/client';
import fetch from '../../config/fetch';
import PageContainer from '../../hoc/PageContainer/PageContainer'

const OrderView = ({ error, data }) => {
  
  if (data.length === 0) {
    return (
      <PageContainer id={'Orders'} title={'Orders'} key={'orders'}>
        <div className={classes.noOrders}>
          {'You have made no orders yet. '}
          <Link href='/'><a>{'Start shopping!'}</a></Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <div className={classes.wrap}>
      <Item.Group divided>
        {data.map((order) => {
          const date = new Date(order.createdAt);
          return (
            <Item key={order._id}>
              <Item.Content>
                <Item.Header as="a">
                  {date
                    .toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })
                    .replace(/ /g, '-')}
                </Item.Header>
                <Item.Meta>
                  <span className="cinema">
                    Total Amount : {order.grandTotal}
                  </span>
                </Item.Meta>
                <Item.Description>
                  Deliver Address :{' '}
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
                </Item.Description>
                <Item.Extra>
                  <Label color={order.status === 'pending' ? 'grey' : order.status === 'completed' ? 'green' : order.status === 'shipped' ? 'teal' : 'red'}>
                    {order.status}
                  </Label>
                  <Link href={'/orders/' + order._id}>
                    <a className={classes.viewMore}>
                      <Button floated="right">
                        View More
                        <Icon name="right chevron" />
                      </Button>
                    </a>
                  </Link>
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination:
          '/signin?callbackUrl=' + process.env.NEXTAUTH_URL + '/orders',
        permanent: false,
      },
    };
  }

  const headers = { Authorization: `Bearer ${session.accessToken}` };
  const res = await fetch('orders/me', { headers });

  return {
    props: {
      ...res,
    },
  };
};

export default OrderView;
