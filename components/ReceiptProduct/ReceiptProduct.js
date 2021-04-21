import React from 'react'

const ReceiptProduct = ({ product, price, qty, type, offDiscount }) => {
    let total = 0

    if(type === 'buy 1 get 2nd off' && offDiscount > 0 && qty >= 2) {
        total = ( price * (qty - 1) ) + ( price * (100 - offDiscount) / 100 )
    }
    else {
        total = price * qty
    }
    
    return (
        <tr>
            <td align='center'>{product.code}</td>
            <td align='center'>{product.name}</td>
            <td align='center'>{qty}</td>
            <td align='right'>${price}</td>
            <td align='right'>${total}</td>
        </tr>
    );
};

export default ReceiptProduct;