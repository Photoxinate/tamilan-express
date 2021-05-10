import * as actionTypes from './actionTypes'
import axios from '../../axios'

const fetchSHippingCharge = minGta => {
    return {
        type: actionTypes.FETCH_SHIPPING,
        minGta
    }
}

export const fetchCart = () => async dispatch => {
    axios.get('settings/shippingCharge')
        .then(res => {            
            dispatch(fetchSHippingCharge(res.data && res.data.shippingCharge ? res.data.shippingCharge.minGta : 100))
        })
        .catch(err => {
            console.log(err)
        })
}