import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from '../../utils';

const initialState ={
  authData : null,
  error : null,
  token : null,
  userId: null,
  loading : false,
}

const reducer = (state = initialState , action) =>{
  switch(action.type){
    case actionTypes.AUTH_START:
      return authStart(state)
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action)
    case actionTypes.AUTH_FAIL:
      return authFail(state, action) 
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state) 
    default:
      return state;
  }
}

const authStart = (state) => {
  return{
    ...state,
    error: null,
    loading : true
  }
}

const authSuccess = (state, action) =>{
  return{
    ...state,
    token : action.token,
    userId : action.userId,
    error: null,
    loading: false
  }
}

const authFail = (state, action) =>{
  return{
    ...state,
    error: action.error,
    loading: false
  }
}

const authLogout = state => {
  return{
    ...state,
    token: null,
    userId: null
  }
}

export default reducer;
