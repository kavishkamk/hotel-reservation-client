import React from "react";
import { Link } from "react-router-dom";

const ButtonWithIcon = (props) => {
    return (
        <Link
            to={props.to}
            exact={props.exact}
            className={`{props.size || "w-full"} ${props.color || "bg-cornflower-blue"} text-white px-2 py-1 rounded-xl ${props.className}`}
        >
            {props.children}
        </Link>
    )
};

export default ButtonWithIcon;