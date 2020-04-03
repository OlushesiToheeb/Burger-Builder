import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";
import { withRouter} from "react-router-dom";

class Burger extends React.Component{
    render(){
        
        let transformedIngredients = Object.keys(this.props.ingredients)
            .map(igKey => {
            return[...Array(this.props.ingredients[igKey])]

            .map((_, i) =>(
                <BurgerIngredient key={igKey + [i]} type={igKey}/>
                ));
            }).reduce((arr, el) => {
                return arr.concat(el)
            },[])
            
        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients!</p>
        }

        return (

            <div className="Burger">
                <BurgerIngredient  type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient  type="bread-bottom"/>
            </div>
        )
    }
}

export default withRouter(Burger);
