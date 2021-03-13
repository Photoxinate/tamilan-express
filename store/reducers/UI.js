import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './utility'

const initialState = {
  show: false,
  product: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL: return updateObject(state, { show: true, product: action.product })
    case actionTypes.CLOSE_MODAL: return updateObject(state, { show: false })
  }

  return state
}

export default reducer;
