import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () => {
  return{
    type: actionTypes.AUTH_START
  }
}

export const authSuccess =  (token, userId) => {
  return{
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId
  }
}

export const authFail = error => {
  return{
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password : password,
      returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCFjdOyz0cCJxQLz2y2OAJy-NF1PR-qIq8';
    if(!isSignUp){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCFjdOyz0cCJxQLz2y2OAJy-NF1PR-qIq8'
    }
    axios.post(
      url,
      authData
    ).then(res =>{
      console.log(res);
      dispatch(authSuccess(res.data.idToken, res.data.localId));
    }).catch(err => {
      console.log(err);
      dispatch(authFail(err));
    })
  }
}