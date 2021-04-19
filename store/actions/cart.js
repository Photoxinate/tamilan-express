import * as actionTypes from './actionTypes'
import axios from '../../axios'
import { updateObject } from '../reducers/utility'
import { getSession } from 'next-auth/client'

const updateCartStart = () => {
    return {
        type: actionTypes.UPDATE_CART_START
    }
}

const updateCartSuccess = (cartProducts, message) => {
    return {
        type: actionTypes.UPDATE_CART_SUCCESS,
        cartProducts,
        message
    }
}

const updateCartFail = error => {
    return {
        type: actionTypes.UPDATE_CART_FAIL,
        error
    }
}

const fetchCartSuccess = cartProducts => {
    return {
        type: actionTypes.FETCH_CART,
        cartProducts
    }
}

const clearCartSuccess = () => {
    return {
        type: actionTypes.CLEAR_CART
    }
}

const updateTotalPrice = total => {
    return {
        type: actionTypes.UPDATE_TOTAL,
        total
    }
}

const updateCount = count => {
    return {
        type: actionTypes.UPDATE_COUNT,
        count
    }
}

const calcTotalPrice = products => {
    let total = 0
    products.forEach(product => {
        const price = product.discount && product.discount > 0 ? 
            (product.price - (product.price * product.discount / 100)) : product.price

        if(product.type === 'buy 1 get 2nd off' && product.offDiscount > 0 && product.qty >= 2) {
            total = total + ( price * (product.qty - 1) ) + ( price * (100 - product.offDiscount) / 100 )
        }
        else {
            total = total + price * product.qty
        }
        
    })

    return total
}

const calcCount = products => {
    let count = 0
    products.forEach(product => {
        count = count + product.qty
    })

    return count
}

export const fetchCart = () => async dispatch => {
    const session = await getSession()
    if(session) {
        const headers = { Authorization: `Bearer ${session.accessToken}` }
        axios.get('users/me/cart', { headers })
            .then(res => {                
                dispatch(fetchCartSuccess(res.data))
                dispatch(updateTotalPrice(calcTotalPrice(res.data)))
                dispatch(updateCount(calcCount(res.data)))
            })
            .catch(err => {
                console.log(err)
            })
    }
    else {
        let carts = []
        if(localStorage.getItem('cartProducts')){
            carts = JSON.parse(localStorage.getItem('cartProducts'))
        }

        dispatch(fetchCartSuccess(carts))
        dispatch(updateTotalPrice(calcTotalPrice(carts)))
        dispatch(updateCount(calcCount(carts)))
    }
}

export const updateCart = (product, qty = 1, type = undefined) => async dispatch => {
    const session = await getSession()
    dispatch(updateCartStart())
    
    let message = `${product.name} successfully added to your cart!`

    if(qty <= 0)
        message = `${product.name} removed from your cart!`
    else if(type === 'cartPage')
        message = `Quantity of ${product.name} updated!`

    if(session) {
        const headers = { Authorization: `Bearer ${session.accessToken}` }
        const data = {
            product: product._id,
            variations: product.variations,
            qty
        }
        
        axios.patch('users/cart', data, { headers })
            .then(res => {
                dispatch(updateCartSuccess(res.data, message))
                dispatch(updateTotalPrice(calcTotalPrice(res.data)))
                dispatch(updateCount(calcCount(res.data)))
            })
            .catch(err => {
                dispatch(updateCartFail(err))
            })
    }
    else {
        let carts = []
        if(localStorage.getItem('cartProducts')){
            carts = JSON.parse(localStorage.getItem('cartProducts'))
        }

        if(qty === 0) {
            carts = carts.filter(cart => cart._id != product._id)
        }
        else if(carts.some(cart => cart._id === product._id)) {
            carts = carts.map(cart => {
                if(cart._id === product._id) {
                  cart = updateObject(cart, { qty })
                }
                
                return cart
            })
        }
        else {
            carts.push({...product, qty})
        }
        
        localStorage.setItem('cartProducts', JSON.stringify(carts))
        dispatch(updateCartSuccess(carts, message))
        dispatch(updateTotalPrice(calcTotalPrice(carts)))
        dispatch(updateCount(calcCount(cart)))
    }

}

export const clearCart = () => dispatch => {
    dispatch(clearCartSuccess())
}