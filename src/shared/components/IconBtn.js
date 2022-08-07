/*
    this component return given content as a navigatin button using NavLink
    properties
        - to = location to navigate
        - childern = content of the component
*/

import React from "react";
import { NavLink } from "react-router-dom";

const IconBtn = (props) => {
    return (
        <NavLink to={props.to}>
            <div className="flex">
                {props.children}
            </div>
        </NavLink>
    );
};

export default IconBtn;