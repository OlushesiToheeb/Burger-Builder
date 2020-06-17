import  * as actionTypes from '../actions/actionsTypes';

const initialState ={
    order: [],
    laoding: false,
    purchase:false
}

const reducer =(state = initialState,action) =>{
    switch(action.type){
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchase:false 
            }
        case actionTypes.PURCHASE_BURGER_START:
            return{
                ...state,
                laoding:true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder ={
                ...action.orderData,
                id:action.orderId
            }
            return {
                ...state,
                laoding:false,
                purchase:true,
                order: state.order.concat(newOrder)
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                laoding:false
            };
        default:
            return state;
    }
}


export default reducer