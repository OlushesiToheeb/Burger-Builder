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

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrderFail = (error) => { 
    return{
        type: actionTypes.FETCH_ORDERS_FAIL,
        error
    }
}

export const fetchOrders = () => {
    return dispatch => {
       dispatch(fetchOrderStart()); 
       axios.get('/orders.json')
       .then(res => {
        const fetchedOrders =[];
        for (let key in res.data){
            fetchedOrders.push({
                ...res.data[key],
                id:key
            });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders))
       })
       .catch( err => {
           dispatch(fetchOrderFail(err));
       })
    }
        

}