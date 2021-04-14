import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './utility'

const initialState = {
  loading: false ,
  error: false,
  message: null,
  products: [],
  count: 0,
  total: 0,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.UPDATE_CART_START: return updateObject(state, { loading: true, added: null })
    case actionTypes.UPDATE_CART_SUCCESS: return updateObject(state, { loading: false, products: action.cartProducts, error: false, message: action.message })
    case actionTypes.UPDATE_CART_FAIL: return updateObject(state, { loading: false, error: true, added: null })
    case actionTypes.FETCH_CART: return updateObject(state, { products: action.cartProducts })
    case actionTypes.UPDATE_TOTAL: return updateObject(state, { total: action.total })
  }

  return state
}

export default reducer;
