import React from "react";

const IconBar = (props) => {
    return (
        <div className={`flex ${props.flexDirection} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default IconBar;