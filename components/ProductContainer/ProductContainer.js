import React from 'react';
import ProuctCard from '../ProductCard/ProductCard';
import classes from './ProductContainer.module.scss';

export const ProductContainer = (props) => {
    // const width = 100/(props.itemsPerRow + 1)
    // const myStyle = {
    //     boxSizing:'border-box',
    //     width: width+'%',
    //     margin: '5px',
    //     padding: '5px'
    // }
  return (
    <div className={classes.container}>
      {props.products.map((product, i) => (
        <div key={product.id} className={classes.wrap} >
          <ProuctCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
