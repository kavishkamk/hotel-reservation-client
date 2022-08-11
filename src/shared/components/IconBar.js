/*
    this will return compnent with given content as a flex
    properties
        - flexDirection = flex direction
        - className = class names
        - childern = content of the component
*/

import React from "react";

const IconBar = (props) => {
    return (
        <div className={`flex ${props.flexDirection} ${props.className} ${props.width || "w-40"}`}>
            {props.children}
        </div>
    );
};

export default IconBar;