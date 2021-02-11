import React from 'react'
import CartTable from '../../components/CartTable/CartTable'
import Cheque from '../../components/Cheque/Cheque'
import { products } from '../../config/config'
import classes from './Cart.module.scss'

const index = () => {

    return (
        <div className={classes.wrap}>
        <CartTable products={products}/>
        <Cheque/>
        </div>
    )
}

export default index
