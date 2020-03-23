import React from "react";
import Body from '../../hoc/Body'
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


class Layout extends React.Component{
    state ={
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }



    sideDrawerToggleHandler = () =>{
        this.setState((prevState) =>{ 
            return{showSideDrawer: !prevState.showSideDrawer}});
    }

    render(){
        return(
            <Body>
                <Toolbar drawToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className="content">{this.props.children}</main>
            </Body>
        )
    }
} 

export default Layout;