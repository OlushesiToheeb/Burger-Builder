import React, { Component } from "react";
import Body from "../../hoc/Body"

import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
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