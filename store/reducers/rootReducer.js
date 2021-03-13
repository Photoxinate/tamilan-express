import UIReducer from './UI'
import CartReducer from './cart'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  cart: CartReducer,
  ui:  UIReducer
})

export default rootReducer;
