import React, { Component } from "react";
import Body from "../../hoc/Body";
import axios from "axios";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

import withErrorhandler from "../../hoc/withErroHandler";

import { connect } from "react-redux";


import * as actions from '../../store/actions/index';




class BurgerBuilder extends Component{
    state={
        //ingredients:null,  
        purchasing:false,
        loading:false,
        
    }

    
    
    componentDidMount(){
        console.log(this.props)
        this.props.onInitIngredients()
    }
    
        
    
    purchaseCancelHandler =()=>{
        this.setState({purchasing:false})
    }
        
    purchaseContinueHandler =()=>{
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }
    


    purchaseHandler = () =>{
        this.props.isAuthenticated ?
        this.setState({purchasing:true}) :
        this.props.history.push('/auth');
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0)

        return sum > 0;
    }

   

    render(){
        const disabledInfo ={
            ...this.props.ings
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.props.error ? <h1 style={{marginTop:"2em"}}>Ingredients can't be loaded!</h1> : <Spinner /> ;
        
        if(this.props.ings){
            
            burger = (
                <Body>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientDeducted={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.price}
                        isAuth={this.props.isAuthenticated}
                        />
                        
                </Body>
            );

            orderSummary = <OrderSummary 
            ingredients={this.props.ings}
            price={this.props.price}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}/>;

        }
        
        if(this.state.loading){
            orderSummary = <Spinner/>
        }

        return(
            <Body>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Body>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        ings: state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated : state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded :(ingName) => dispatch(actions.addIngregient(ingName)),
        onIngredientRemoved :(ingName) => dispatch(actions.removeIngregient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorhandler(BurgerBuilder, axios));