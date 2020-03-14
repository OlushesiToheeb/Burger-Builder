import React from 'react';

import './BuregerIngredient.css'

const buregerIngredient = (props) => {
    let ingredient = null;

    switch(props.type){
        case('bread-bottom'):
            ingredient = <div clasName="BreadBottom"></div>
            break;
        case('bread-top'):
            ingredient =   
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
    }
}

export default buregerIngredient;