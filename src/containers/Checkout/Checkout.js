import React, { Component } from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import queryString from "query-string";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";



class Checkout extends Component{
    state={
        ingredient:null,
        price:0
    }
    
    UNSAFE_componentWillMount(){
        const  ingredients = queryString.parse(this.props.location.search);
        
        let price = 0;
        if(queryString === 'price '){
            price = queryString
        }
            
        this.setState({ingredient: ingredients, totalPrice:price})
        
        console.log(ingredients)

    }


    checkoutCancelledHandler=()=>{
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        
        return(
        
            <div>
               <CheckoutSummary 
                ingredients={this.state.ingredient}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinue={this.checkoutContinueHandler}
                /> 
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => <ContactData
                    ingredients={this.state.ingredient} 
                    price ={this.state.totalPrice}
                    {...props}/>}/>
            </div>
        )
    }
}

export default Checkout;

