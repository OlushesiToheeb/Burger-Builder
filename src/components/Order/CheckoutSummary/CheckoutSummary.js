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
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked>CANCEL</Button>
            <Button clicked>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary