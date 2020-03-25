import React, { Component } from 'react';

import Modal from "../components/UI/Modal/Modal";
import Body from "./Body"

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state={
            error: null
        }
        componentWillMount(){
            axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req
            })
            axios.interceptors.response.use(resp => resp, error =>{
                this.setState({error:error})
            })
        }

        errorConfirmedHandler=()=>{
            this.setState({error:null})
        }
        render(){
            return(
                <Body>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message: null} 
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Body>
            )
        }
    }
}

export default withErrorHandler