import React from 'react'
import ProductDetail from './ProductDetail/ProductDetail'
import classes from './ProductView.module.scss'

const ProductView = ({product}) => {
    return (
        <div className={classes.productView}>
            <div className={classes.imgWrap}>
                <img src={product.img} alt={product.alt}/>
            </div>
            <ProductDetail productDetail={product}/>
        </div>
    )
}

export default ProductView
