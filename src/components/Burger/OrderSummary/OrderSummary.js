import React from 'react';


import Body from "../../../hoc/Body";
import "./OrderSummary.css";
import Button from "../../UI/Button/Button";
import CloseIcon from "../../UI/Button/CloseIcon";

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients).map( igKey =>{ 
        return (<li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                </li>)
    })
    return(
        <Body>
            <CloseIcon clicked={props.purchaseCancelled}/>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Body>
    )
}


export default orderSummary;