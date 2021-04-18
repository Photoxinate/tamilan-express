import React from 'react';
import { useSelector } from 'react-redux';

const CartCount = ({ className }) => {

    const count = useSelector(state => state.cart.count)

    return count > 0 ? <span className={className}>{count}</span> : null
};

export default CartCount;