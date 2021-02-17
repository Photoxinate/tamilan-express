import React from 'react';
import ProductView from '../../components/ProductView/ProductView';
import { products } from '../../config/config';
const index = (props) => {
  return <ProductView product={products[0]} />;
};

export default index;
