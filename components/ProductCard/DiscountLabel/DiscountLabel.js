import React from 'react'
import classes from '../ProductCard.module.scss'

const DiscountLabel = ({discount}) => {
    return (
        <div className={classes.discountLabel}>
            -{discount}%
        </div>
    )
}

export default DiscountLabel