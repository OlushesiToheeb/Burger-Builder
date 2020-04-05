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
        // const  ingredients = queryString.parse(this.props.location.search);
            
        // this.setState({ingredient: ingredients, totalPrice:price})
        
        // console.log(ingredients)

        const query = new URLSearchParams(this.props.location.search)
        const ingredients ={};
        let price = 0;
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];
            }else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredient:ingredients, totalPrice:price})
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

