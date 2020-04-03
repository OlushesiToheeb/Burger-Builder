import React from 'react';


import Body from "../../../hoc/Body";
import "./OrderSummary.css";
import Button from "../../UI/Button/Button";
import CloseIcon from "../../UI/Button/CloseIcon";

class OrderSummary extends React.Component{

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map( igKey =>{ 
            return (<li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
                    </li>)
        })
        return(
            <Body>
                <CloseIcon clicked={this.props.purchaseCancelled}/>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button  clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Body>
        )
    }
}

export default OrderSummary;