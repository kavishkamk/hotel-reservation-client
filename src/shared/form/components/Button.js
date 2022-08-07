/*
    this return a button
    properties
        bgColor => background colro (default bg-turbo)
        width => width (default w-44)
        className => to add class

*/

import React from "react";

const Button = props => {

    return (
        <div>
            <button 
                type={props.type}
                className={`${props.bgColor || "bg-turbo"} drop-shadow-title ${props.width || "w-44"} py-1 rounded-lg ${props.className}`}
            >
                {props.label}
            </button>
        </div>
    );
};

export default Button;