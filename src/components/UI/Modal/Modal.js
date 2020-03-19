import React from 'react';

import "./Modal.css";
import Body from "../../../hoc/Body";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
    <Body>
        <Backdrop show={props.show} closed={props.modalClosed}/>
        <div className="Modal"
            style={{
                transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                opacity:props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Body>
);

export default modal;