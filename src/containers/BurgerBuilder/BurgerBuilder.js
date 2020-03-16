import React, { Component } from "react";
import Body from "../../hoc/Body"

import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }
    }

    render(){
        return(
            <Body>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </Body>
        )
    }
}

export default BurgerBuilder