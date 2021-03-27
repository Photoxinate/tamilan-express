import transform from '../../config/transformCategories'
import * as actionTypes from '../actions/actionTypes'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES: return transform(action.categories)
  }

  return state
}

export default reducer;
