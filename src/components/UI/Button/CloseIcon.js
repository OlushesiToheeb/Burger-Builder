import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const closeIcon = (props) =>{
    return (
        
        <FontAwesomeIcon 
        icon={faTimes} 
        onClick={props.clicked} 
        style={{marginLeft: "90%", fontSize:"1.5em"}}/>
        
    )
}

export default closeIcon;