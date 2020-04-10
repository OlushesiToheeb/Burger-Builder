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

import * as actionTypes from '../../store/actions';




class BurgerBuilder extends Component{
    state={
        //ingredients:null,
        purchasable: false,  
        purchasing:false,
        loading:false,
        error: false
    }

    
    
    componentDidMount(){
        // console.log(this.props)
        // axios.get('https://react-my-burger-f012b.firebaseio.com/ingredients.json')
        //     .then(res =>{
        //         this.setState({ingredients:res.data})
        //     })
        //     .catch(err =>{
        //         console.log(err, err.message)
        //         this.setState({error:true});
        //     })
    } 
    
        
    
    purchaseCancelHandler =()=>{
        this.setState({purchasing:false})
    }
        
    purchaseContinueHandler =()=>{
        // alert("You continue!");
      
        const queryParams =[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }

        queryParams.push('price=' + this.props.price);
        const queryString= queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?' + queryString 
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

   

    render(){
        const disabledInfo ={
            ...this.props.ings
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.state.error ? <h1 style={{marginTop:"2em"}}>Ingredients can't be loaded!</h1> : <Spinner /> ;
        
        if(this.props.ings){
            
            burger = (
                <Body>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls 
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientDeducted={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.props.price}/>
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
        ings: state.ingredients,
        price : state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientAdded :(ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
        onIngredientRemoved :(ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName:ingName})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorhandler(BurgerBuilder, axios));