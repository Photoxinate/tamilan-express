import React from 'react';
import { useSelector } from 'react-redux';

const CartCount = ({ className }) => {

    const products = useSelector(state => state.cart.products)

    return products.length > 0 ? <span className={className}>{products.length}</span> : null
};

export default CartCount;