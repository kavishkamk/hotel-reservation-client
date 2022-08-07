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
                onChange={changeHandler}
                onBlur={onClickHandler}
                value={inputState.value}
                className={`${props.width || "w-full"} bg-white opacity-75 drop-shadow-title rounded-xl px-2 py-1 text-sm ${!inputState.isValid && inputState.isTouched && "border-2 border-red-600 bg-cosmos"}`}
            />
            {!inputState.isValid && inputState.isTouched && <p className="text-sxm text-red-500">{props.errorText}</p>}
        </div>
    );
};

export default Input;