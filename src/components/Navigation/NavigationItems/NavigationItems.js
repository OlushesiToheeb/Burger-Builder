import React from 'react';
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";


const navigationItems = () =>(
    <ul className="NavigationItems">
        
        <NavigationItem >Burger Builder</NavigationItem>
    
        <NavigationItem >Checkout</NavigationItem>
         
    </ul>
)

export default navigationItems