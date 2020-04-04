import React, { Component } from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import queryString from "query-string";



class Checkout extends Component{
    state={
        ingredient:{
            salad:1,
            bacon:1,
            cheese:1,
            meat:1
        },
    }
    
    componentDidMount(){
        const  ingredients = queryString.parse(this.props.location.search);
        console.log(ingredients)
        
        this.setState({ingredient: ingredients})

    }


    checkoutCancelledHandler=()=>{
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        console.log(this.state)
        return(
        
            <div>
               <CheckoutSummary 
                ingredients={this.state.ingredient}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinue={this.checkoutContinueHandler}
                /> 
               <p>{this.state.ingredient.salad}</p>
            </div>
        )
    }
}

export default Checkout;

