import React, { useEffect, useReducer } from "react";
import {validate} from "../../util/validators";

const inputReduser = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return (
                {
                    ...state,
                    value: action.value,
                    isValid: validate(action.value, action.validators)
                }
            );
        case "TOUCHED":
            return (
                {
                    ...state,
                    isTouched: true
                }
            );
        default:
            return state;
    }
}

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReduser, {
        value: props.value || "",
        isValid: false,
        isTouched: props.isValied || false
    });

    const changeHandler = event => {
        dispatch({
            type: "CHANGE",
            value: event.target.value,
            validators: props.validators
        });
    };

    const onClickHandler = () => {
        dispatch({
            type: "TOUCHED"
        });
    };

    const { onInput, id } = props;
    const {value, isValid} = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [onInput, id, value, isValid]);

    if (props.type === "select") {
        return (
            <div className={`flex justify-center content-center text-left ${props.sectionClass}`}>
                <label htmlFor={props.id} className="text-xs mb-1 pl-1">{props.title}</label>
                <select 
                    id={props.id} 
                    value={inputState.value} 
                    onChange={changeHandler} 
                    name={props.id}
                    className={props.className}
                >
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </div>
        );
    };

    if (props.type === "date" || props.type === "number") {
        return (
            <div className={`flex justify-center content-center text-left ${props.sectionClass}`}>
                <label htmlFor={props.id} className="text-xs mb-1">{props.title}</label>
                <input 
                    id={props.id}
                    type={props.type}
                    name={props.id}
                    onChange={changeHandler}
                    value={inputState.value}
                    placeholder={props.placeholder}
                    className={props.className}
                />
            </div>
        );
    }

    const inputItem = (
        <input 
            id={props.id}
            type={props.type}
            name={props.id}
            onChange={changeHandler}
            onBlur={onClickHandler}
            value={inputState.value}
            placeholder={props.placeholder}
            className={`${props.width || "w-full"} drop-shadow-title ${!props.noLabel && "rounded-xl"} px-2 ${props.paddingY || "py-1"} text-sxm ${!inputState.isValid && inputState.isTouched ? "border-2 border-red-600 bg-cosmos" : (props.bgField ? props.bgField : "bg-white opacity-75")} ${props.className}`}
        />
    );

    if (props.noLabel) {
        return (
            <div className={`${props.marginButtom || "mb-4"} text-left`}>
                {inputItem}
            {!inputState.isValid && inputState.isTouched && <p className="text-xxs text-red-500">{props.errorText}</p>}
            </div>
        );
    }
    
    return (
        <div className={`${props.marginButtom || "mb-4"} text-left`}>
            <label 
                htmlFor={props.id}
                className={`font-main ${props.textSize || "text-xs"}`}
            >
                {props.title}
            </label> <br />
            {inputItem}
            {!inputState.isValid && inputState.isTouched && <p className="text-xxs text-red-500">{props.errorText}</p>}
        </div>
    );
};

export default Input;