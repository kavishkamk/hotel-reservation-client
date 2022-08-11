import React from "react";

const CategoryBox = props => {
    return (
        <div className="text-left text-xs leading-relaxed my-3 mx-4">
            <div className="font-bold text-sm">{props.title}</div>
            <div className={`flex flex-col`}>
                {props.children}
            </div>
        </div>
    );
};

export default CategoryBox;