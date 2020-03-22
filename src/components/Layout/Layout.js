import React from "react";
import Body from '../../hoc/Body'
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
const layout = (props) =>(
        <Body>
            <Toolbar />
            <SideDrawer />
            <main className="content">{props.children}</main>
        </Body>
)


export default layout;