import React, { Component } from "react";
import Body from "../../hoc/Body";
import axios from "axios";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import axiosPost from "../../axios-orders";
import withErrorhandler from "../../hoc/withErroHandler";


const INGREDIENT_PRICES ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}


class BurgerBuilder extends Component{
    state={
        ingredients:null,
        totalPrice: 4,
        purchasable: false,  
        purchasing:false,
        loading:false,
        error: false
    }

    
    
    componentDidMount(){
        axios.get('https://react-my-burger-f012b.firebaseio.com/ingredients.json')
            .then(res =>{
                console.log(res, res.data)
                this.setState({ingredients:res.data})
            })
            .catch(err =>{
                console.log(err, err.message)
                this.setState({error:true});
            })
    } 
    
        
    
    purchaseCancelHandler =()=>{
        this.setState({purchasing:false})
    }
        
    purchaseContinueHandler =()=>{
        // alert("You continue!");
        
        this.setState({ loading :true })

        const order ={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer:{
                name:"Olushesi Toheeb",
                address:{
                    street: "Teststreet 1",
                    zipCode:"41351",
                    country:"Nigeria"
                },
                email:"test@test.com"
            },
            delliveryMethod:"fastest"
        }
        axiosPost.post('/orders.json', order)
        .then(resp =>{
            console.log(resp, resp.data)
            this.setState({ loading:false, purchasing:false })
        })
        .catch(err => {
            this.setState({ loading:false,  purchasing:false})
        })
    }
    


    purchaseHandler = () =>{
        this.setState({purchasing:true})
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0)

        this.setState({purchasable : sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition =INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice : newPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

            if(oldCount <= 0){
                return;
            }
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceDeduction =INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice : newPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.state.error ? <h1 style={{marginTop:"2em"}}>Ingredients can't be loaded!</h1> : <Spinner /> ;
        
        if(this.state.ingredients){
            
            burger = (
                <Body>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientDeducted={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice}/>
                </Body>
            );

            orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
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

export default withErrorhandler(BurgerBuilder, axios);