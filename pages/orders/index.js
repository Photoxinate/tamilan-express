import React from 'react'
import OrderView from '../../components/OrderView/OrderView'
import { products } from '../../config/config'

const index = () => {
    return (
        <OrderView products={products}/>
    )
}

export default index