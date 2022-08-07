import React from "react";

const Input = (props) => {
    return (
        <div className="mb-4 text-left">
            <label 
                htmlFor={props.id}
                className={`font-main text-xs`}
            >
                {props.title}
            </label> <br />
            <input 
                id={props.id}
                type={props.type}
                name={props.id}
                onChange={props.onChange}
                className={`${props.width || "w-full"} bg-white opacity-75 drop-shadow-title rounded-xl px-2 py-1 text-sm`}
            />
        </div>
    );
};

export default Input;