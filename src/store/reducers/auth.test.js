import reducer from './auth';
import * as actionTypes from '../actions/actionsTypes';

describe('auth reducer', () =>{
  it('should return the initial state', () =>{
    expect(reducer(undefined, {})).toEqual({
      authData : null,
      error : null,
      token : null,
      userId: null,
      loading : false,
      authRedirectPath: '/'
    })
  })

  it('should store the token and userID upon login', () =>{
    expect(reducer({
      authData : null,
      error : null,
      token : null,
      userId: null,
      loading : false,
      authRedirectPath: '/'
    },{
      type : actionTypes.AUTH_SUCCESS,
      token : 'some-token',
      userId: 'some-user-id'
    })).toEqual({
      authData : null,
      error : null,
      token : 'some-token',
      userId: 'some-user-id',
      loading : false,
      authRedirectPath: '/'
    })
  })
})