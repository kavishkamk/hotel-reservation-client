/*
    this is a wrapper component
    properties
        children => add childern
        className => add content
*/

import React from "react";

const FormWrapper = props => {
    return (
        <div className={`border border-solid border-black rounded-lg px-8 py-10 w-full ${props.className}`}>
            {props.children}
        </div>
    );
};

export default FormWrapper;