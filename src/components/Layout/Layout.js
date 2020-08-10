import React from "react";
import Body from '../../hoc/Body'
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { connect } from 'react-redux';


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
        const { isAuthenticated } = this.props;

        return(
            <Body>
                <Toolbar 
                isAuth = {isAuthenticated}
                drawToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    isAuth = {isAuthenticated}
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className="content">{this.props.children}</main>
            </Body>
        )
    }
} 

const mapStateToProps = (state) => {
    return{
        isAuthenticated : state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);