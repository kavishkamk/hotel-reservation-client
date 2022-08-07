/*
    this retun button as a link (this button can add icon, it should provide as a content of the component)
    properties
        - to = navigation link
        - exact = {true or false}
        - className = add classes
        - children = content of the component 
*/

import React from "react";
import { Link } from "react-router-dom";

const ButtonWithIcon = (props) => {
    return (
        <Link
            to={props.to}
            exact={props.exact}
            className={`{props.size || "w-full"} ${props.color || "bg-cornflower-blue"} ${props.textColor || "text-white"} px-2 py-1 rounded-xl ${props.className}`}
        >
            {props.children}
        </Link>
    )
};

export default ButtonWithIcon;