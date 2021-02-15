import React from 'react';
import ProuctCard from '../ProductCard/ProductCard';
import classes from './ProductContainer.module.scss';

export const ProductContainer = (props) => {
    const width = 100/props.itemsPerRow
    const myStyle = {
        boxSizing:'border-box',
        width: width+'%',
        margin: '5px',
        padding: '5px'
    }
  return (
    <div className={classes.container}>
      {props.prodcuts.map((product, i) => (
        <div key={product.id} className={classes.wrap} style={myStyle}>
          <ProuctCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
