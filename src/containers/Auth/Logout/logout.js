
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions';
import { Redirect } from 'react-router-dom';

class Logout extends Component{
  componentDidMount(){
    this.props.dispatch(logout());
  }
  render(){
    return <Redirect to='/'/>;
    
  }
}

export default connect()(Logout);