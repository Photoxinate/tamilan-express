import React from 'react';
import ProuctCard from '../ProductCard2/ProductCard2';
import classes from './ProductContainer.module.scss';

export const ProductContainer = ({ products, search }) => {
    // const width = 100/(props.itemsPerRow + 1)
    // const myStyle = {
    //     boxSizing:'border-box',
    //     width: width+'%',
    //     margin: '5px',
    //     padding: '5px'
    // }
  return (
    <div className={classes.container}>
      {products.map(product => (
        <div key={product._id} className={search ? [classes.searchWrap, classes.wrap].join(' '): classes.wrap} >
          <ProuctCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
