import React from 'react'
import classes from './ProductBuy.module.scss'
import Button from '../../UI/Button/Button' 

const ProductBuy = (props) => {
    return (
        <div className={classes.productBuy}>
            <Button text='ADD TO CART' onClicked={props.onAddProduct}/>
            <Button text='BUY NOW'/>
        </div>
    )
}

export default ProductBuy