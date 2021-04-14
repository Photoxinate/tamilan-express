import * as actionTypes from './actionTypes'
import axios from '../../axios'
import { updateObject } from '../reducers/utility'

const updateCartStart = () => {
    return {
        type: actionTypes.UPDATE_CART_START
    }
}

const updateCartSuccess = (cartProducts, name) => {
    return {
        type: actionTypes.UPDATE_CART_SUCCESS,
        cartProducts,
        name
    }
}

const updateCartFail = error => {
    return {
        type: actionTypes.UPDATE_CART_FAIL,
        error
    }
}

const fetchCartSuccess = (cartProducts) => {
    return {
        type: actionTypes.FETCH_CART,
        cartProducts
    }
}

export const fetchCart = (session) => dispatch => {
    if(session) {
        const headers = { Authorization: `Bearer ${session.accessToken}` }
        axios.get('users/me/cart', { headers })
            .then(res => {
                console.log(res);
                let cartProducts = []
                if(res.data) {
                    cartProducts = res.data.cart.map(cart => ({
                        qty: cart.qty, id: cart.product._id, variations: cart.variations
                    }))
                }
                
                dispatch(fetchCartSuccess(cartProducts))
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
    }
}

export const updateCart = (session, name, id, qty, variations = undefined) => dispatch => {
    dispatch(updateCartStart())

    if(session) {
        const headers = { Authorization: `Bearer ${session.accessToken}` }
        const data = {
            product: id,
            qty,
            variations
        }
        axios.patch('users/cart', data, { headers })
            .then(res => {
                console.log(res)
                dispatch(updateCartSuccess(res.data, name))
            })
            .catch(err => {
                console.log(err)
                dispatch(updateCartFail(err))
            })
    }
    else {
        let carts = []
        if(localStorage.getItem('cartProducts')){
            carts = JSON.parse(localStorage.getItem('cartProducts'))
        }

        if(qty === 0) {
            carts = carts.filter(cart => cart.product != id)
        }
        else if(carts.some(cart => cart.product === id)) {
            carts = carts.map(cart => {
                if(cart.product === id) {
                  cart = updateObject(cart, { qty })
                }
                
                return cart
            })
        }
        else {
            carts.push({product: id, qty, variations})
        }
        
        localStorage.setItem('cartProducts', JSON.stringify(carts))

        dispatch(updateCartSuccess(carts, name))
    }

}