import React from 'react'
import classes from '../ProductCart.module.scss';

const ProductPrice = (props) => {
    let price
    if(props.discount){
        price = (props.price * props.discount)/100
    }
    return (
        <div className={classes.priceWrap}>
            ${price}
        </div>
    )
}

export default ProductPrice
