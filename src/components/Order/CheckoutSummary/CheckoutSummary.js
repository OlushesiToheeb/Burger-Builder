import React from 'react';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary";

const checkoutSummary = (props) =>{
    return(
        
        <div className="CheckoutSummary">
            <h1 style={{textAlign: "center"}}>We hope it tastes well!</h1>
            <div style={{width:"100%",
                        height: "300px",
                        margin:"auto"}}> 
                <Burger ingredients = {props.ingredients}/>
        
            </div>
            <div style={{textAlign:"center"}}>
                <Button 
                    btnType="Danger" 
                    clicked={props.checkoutCancelled}>CANCEL</Button>
                <Button btnType="success" clicked={props.checkoutContinue}>CONTINUE</Button>
            </div>
        </div>
    )
}

export default checkoutSummary