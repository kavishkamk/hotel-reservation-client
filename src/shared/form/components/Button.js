/*
    this return a button
    properties
        bgColor => background colro (default bg-turbo)
        width => width (default w-44)
        className => to add class
        disabled => disable button
        sectionClass => add class to wrapper div

*/

import React from "react";

const Button = props => {

    return (
        <div className={`flex justify-center content-center ${props.sectionClass}`}>
            <button 
                type={props.type}
                className={`drop-shadow-title ${props.width || "w-44"} py-1 ${props.borderRadious || "rounded-lg"} ${props.className} ${props.isDisabled ? ("bg-pgray text-dusty-gray border-pgray cursor-not-allowed") : (props.bgColor || "bg-turbo")}`}
                disabled={props.isDisabled}
            >
                {props.label}
            </button>
        </div>
    );
};

export default Button;