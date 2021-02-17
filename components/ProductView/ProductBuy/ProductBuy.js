import React from 'react'
import classes from './ProductBuy.module.scss'
import Button from '../../UI/Button/Button' 

const ProductBuy = (props) => {
    return (
        <div className={classes.productBuy}>
            <Button text='Add to Cart' onClicked={props.onAddProduct}/>
            <Button text='Buy Now'/>
        </div>
    )
}

export default ProductBuy