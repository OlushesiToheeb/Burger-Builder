import * as actionTypes from "../actions/actionsTypes";

const initialState ={
  authData : null,
  error : null,
  token : null,
  userId: null,
  loading : false,
  authRedirectPath: '/'
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
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state,action) 
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
const setAuthRedirectPath = (state, action) =>{
  return{
    ...state,
    authRedirectPath : action.path
  }
}

export default reducer;
