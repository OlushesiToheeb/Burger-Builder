import React from 'react';
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleButton from "../Toolbar/ToggleButton/ToggleButton"

const toolBar = (props) => (
    <header className="Toolbar">
        <ToggleButton clicked={props.drawToggleClicked}/>
        
        <Logo height="80%"/>
        <nav className="DesktopOnly">
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
)

export default toolBar;