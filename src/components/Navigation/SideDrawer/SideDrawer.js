import React from 'react';

import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Body from "../../../hoc/Body";

const sideDrawer =(props)=>{
    let attachedClasses = ["SideDrawer", "close"];
    if(props.open){
        attachedClasses = ["SideDrawer", "open"];
    }
    return(
        <Body>
            <Backdrop 
                open={props.open} 
                closed={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            
                <Logo  height="11%" marginBottom="32px"/>
                
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>

            </div>

        </Body>
    );
}

export default sideDrawer