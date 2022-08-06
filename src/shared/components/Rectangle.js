/*
    - this return rectangule
    - properties
        - width = with of the rectangle (default - 100%)
        - height = height of the rectangle (default - 100%)
        - color = background color of the rectangle
        - bgImage = background image of the rectangle (* image should be in the src/assets/images)
        - children = content of the rectangle
*/

import React from "react";

const Rectangle = (props) => {
    return (
        <div 
            className={`${props.width || "w-full"} ${props.height} ${props.color}`}
            style={{backgroundImage: `url(/assets/images/${props.bgImage})`}}
        >
            {props.children}
        </div>
    );
};

export default Rectangle;