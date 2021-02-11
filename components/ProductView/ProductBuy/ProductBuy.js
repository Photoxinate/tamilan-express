import React from 'react'
import classes from './ProductBuy.module.scss'
import Button from '../../UI/Button/Button' 

const ProductBuy = () => {
    return (
        <div className={classes.productBuy}>
            <Button text='Add to Cart'/>
            <Button text='Buy Now'/>
        </div>
    )
}

export default ProductBuy