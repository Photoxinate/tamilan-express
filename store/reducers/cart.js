import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './utility'

const initialState = {
  products: [],
  count: 0,
  total: 0,
}

const updateCart = (state, action) => {

  let count = 0, total = 0
  let products

  // check product already exist in cart
  if(state.products.some(product => product.id === action.id)) {    
    // update the cart
    products = state.products.map(product => {
      if(product.id === action.id) {
        product = updateObject(product, { qty: action.qty })
      }
      count = count + product.qty
      total = total + (product.qty * product.price) 
      return product
    })
  }
  else {
    // add to the cart
    products = state.products
    products.push({ id: action.id, price: action.price, qty: action.qty })
    count = state.count + action.qty
    total = state.total + (action.qty * action.price) 
  }

  return updateObject(state, { products, count, total })
}


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.UPDATE_CART: return updateCart(state, action)
  }

  return state
}

export default reducer;
