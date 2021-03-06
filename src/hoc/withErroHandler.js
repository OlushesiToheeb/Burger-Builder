import React, { Component } from 'react';

import Modal from "../components/UI/Modal/Modal";
import Body from "./Body"

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        state={
            error: null
        }
        UNSAFE_componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null})
                return req
            })
            this.respIntercetor= axios.interceptors.response.use(resp => resp, error =>{
                this.setState({error:error})
            })
        }

        UNSAFE_componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.respIntercetor);
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