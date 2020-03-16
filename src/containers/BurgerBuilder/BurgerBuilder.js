import React, { Component } from "react";
import Body from "../../hoc/Body"

import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component{
    render(){
        return(
            <Body>
                <Burger/>
                <div>Build Control</div>
            </Body>
        )
    }
}

export default BurgerBuilder