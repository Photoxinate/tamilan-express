import UIReducer from './UI'
import CartReducer from './cart'
import CategoryReducer from './category'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  cart: CartReducer,
  ui:  UIReducer,
  categories: CategoryReducer,
})

export default rootReducer;
