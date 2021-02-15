import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TO_CART:
            return{
                ...state,
                products: state.products.concat(action.payload.product)
            }
           
 
        case actionTypes.REMOVE_FROM_CART:
            const updatedProducts = state.products.filter((prod, i) => prod.id !== action.payload.id)
            return {
                ...state,
                products: updatedProducts
            }
    }
    return state;
};

export default reducer;