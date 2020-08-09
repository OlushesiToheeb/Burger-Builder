import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from '../../utils';

const initialState ={
  authData : null,
  error : null
}

const reducer = (state = initialState , action) =>{
  switch(action.type){
    case actionTypes.AUTH_SUCCESS:
      return setauthData(state, action)
    case actionTypes.AUTH_FAIL:
      return seterror(state, action) 
    default:
      return state;
  }
}

const setauthData = (state, action) => {
  return{
    ...state,
    authData : action.authData
  }
}

const seterror = (state, action) => {
  return{
    ...state,
    error : action.error
  }
}

export default reducer;
