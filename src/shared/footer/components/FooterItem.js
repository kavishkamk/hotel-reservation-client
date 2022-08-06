import React from "react";

const FooterItem = (props) => {
    return (
        <div className="text-white text-xs">
            <div className="text-sm mb-2">{props.title}</div>
            {props.children}
        </div>
    );
};

export default FooterItem;