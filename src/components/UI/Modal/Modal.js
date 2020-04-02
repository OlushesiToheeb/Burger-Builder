import React from 'react';

import "./Modal.css";
import Body from "../../../hoc/Body";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextState){ 
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    UNSAFE_componentWillUpdate(){
        console.log("[Modal] willupdate")
    }
    
    render(){
        return(
            <Body>
                <Backdrop show={this.props.show} closed={this.props.modalClosed}/>
                <div className="Modal"
                    style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity:this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Body>
        )
    }
}

export default Modal;