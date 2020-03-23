import React from 'react';
import "./Backdrop.css";

const backDrop =(props )=>(

    props.show || props.open ? <div 
    className="Backdrop"
    onClick={props.closed}></div> : null
);

export default backDrop;