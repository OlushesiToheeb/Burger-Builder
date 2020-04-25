import * as actionTypes from "./actionsTypes";
import axios from '../../axios-orders';

export  const purchaseBurgerSuccess = (id, orderData) =>{
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return{
        type:actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseInit = () =>{
    return{
        type:actionTypes.PURCHASE_INIT
    }
}

export const purchaseBurger = (orderData) =>{
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
        .then(resp =>{
            console.log(resp, resp.data)
            dispatch(purchaseBurgerSuccess(resp.data.name, orderData))
        })
        .catch(error => {
            dispatch(purchaseBurgerFail(error))
        })
    }
}