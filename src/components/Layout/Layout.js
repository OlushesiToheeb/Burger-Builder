import React from "react";
import Body from '../../hoc/Body'
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const layout = (props) =>(
        <Body>
            <Toolbar/>
            <main className="content">{props.children}</main>
        </Body>
)


export default layout;