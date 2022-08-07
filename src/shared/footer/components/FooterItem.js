/*
    this for return footer section as a separate parts (as a div)
    properties
        - title = title of the content
        - children = content of the file
*/

import React from "react";

const FooterItem = (props) => {
    return (
        <div className="text-white text-xxs">
            <div className="text-sxm mb-2">{props.title}</div>
            {props.children}
        </div>
    );
};

export default FooterItem;