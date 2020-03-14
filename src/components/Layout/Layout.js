import React from "react";
import Body from '../../hoc/Body'
import "./Layout.css"

const layout = (props) =>(
        <Body>
            <div >Toolbar, SideDrawer, Backdrop</div>
            <main className="content">{props.children}</main>
        </Body>
)


export default layout;