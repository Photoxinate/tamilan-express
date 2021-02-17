import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isShowModal: false,
  modalProduct: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        isShowModal: true,
        modalProduct: action.payload.product,
      };

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isShowModal: false,
      };
  }
  return state;
};
export default reducer;
