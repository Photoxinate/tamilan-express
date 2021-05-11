import * as actionTypes from '../actions/actionTypes'
import { updateObject } from './utility'

const initialState = {
  minGta: 100,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.FETCH_SHIPPING: return updateObject(state, { minGta: action.minGta })
  }

  return state
}

export default reducer;
