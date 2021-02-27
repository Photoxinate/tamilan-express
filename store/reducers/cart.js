import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  const updatedProducts = [...state.products]
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (
        state.products.some((prod) => prod.id === action.payload.product.id)
      ) {
        const index = updatedProducts.findIndex(
          (prod) => prod.id == action.payload.product.id
        );

        updatedProducts[index].qty =
          updatedProducts[index].qty + action.payload.qty;
        return {
          ...state,
          products: updatedProducts,
        };
      } else {
        const newProduct = {
          ...action.payload.product,
          qty: action.payload.qty,
        };
        return {
          ...state,
          products: state.products.concat(newProduct),
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        products: updatedProducts.filter(
          (prod, i) => prod.id !== action.payload.id
        ),
      };

      case actionTypes.CHANGE_QUANTITY:
        const index = updatedProducts.findIndex(
          (prod) => prod.id == action.payload.id
        );

        updatedProducts[index].qty =
          updatedProducts[index].qty + action.payload.qty;
        return {
          ...state,
          products: updatedProducts,
        };
  }
  return state;
};

export default reducer;
