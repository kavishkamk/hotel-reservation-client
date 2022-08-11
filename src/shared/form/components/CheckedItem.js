import React from "react";

const CheckedItem = props => {
    return (
        <label className="flex content-center">
            <span className="pr-2">{props.title}</span>
            <input type="checkbox" checked={props.checked} className="ml-auto" />
        </label>
    );
};

export default CheckedItem;