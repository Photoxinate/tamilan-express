import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './utility'

const initialState = {
  loading: false ,
  error: false,
  added: null,
  products: [],
  count: 0,
  total: 0,
}

// const updateCart = (state, action) => {

//   let count = 0, total = 0
//   let products

//   // check product already exist in cart
//   if(state.products.some(product => product.id === action.id)) {    
//     // update the cart
//     products = state.products.map(product => {
//       if(product.id === action.id) {
//         product = updateObject(product, { qty: action.qty })
//       }
//       count = count + product.qty
//       total = total + (product.qty * product.price) 
//       return product
//     })
//   }
//   else {
//     // add to the cart
//     products = state.products
//     products.push({ id: action.id, price: action.price, qty: action.qty })
//     count = state.count + action.qty
//     total = state.total + (action.qty * action.price) 
//   }

//   return updateObject(state, { products, count, total })
// }

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.UPDATE_CART_START: return updateObject(state, { loading: true, added: null })
    case actionTypes.UPDATE_CART_SUCCESS: return updateObject(state, { loading: false, products: action.cartProducts, error: false, added: action.name })
    case actionTypes.UPDATE_CART_FAIL: return updateObject(state, { loading: false, error: true, added: null })
    case actionTypes.FETCH_CART: return updateObject(state, { products: action.cartProducts })
  }

  return state
}

export default reducer;
