import UIReducer from './UI'
import CartReducer from './cart'
import CategoryReducer from './category'
import ShippingReducer from './shipping'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  cart: CartReducer,
  ui:  UIReducer,
  categories: CategoryReducer,
  shipping: ShippingReducer
})

export default rootReducer;
