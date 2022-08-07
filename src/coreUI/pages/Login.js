/*
    login page of the application
*/

import React from "react";

import ButtonWithIcon from "../../shared/components/ButtonWithIcon";
import Rectangle from "../../shared/components/Rectangle";
import Footer from "../../shared/footer/components/Footer";
import Button from "../../shared/form/components/Button";
import FormWrapper from "../../shared/form/components/FormWrapper";
import Input from "../../shared/form/components/Input";
import AuthTitle from "../components/AuthTitle";
import { UserIcon } from "../../shared/svg/svgIconValues";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from "../../shared/util/validators";
import {useForm} from "../../shared/hooks/form-hook";

const Login = () => {

    const [inputState, inputHandler] = useForm({
        email: {
            value: "",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        }
    }, false);

    return (
        <div className="relative font-main mbp:h-screen mbp:overflow-hidden">
            <Rectangle height="h-2" color="bg-black"/>
            <Rectangle bgImage="bg-image2.svg" height="h-screen mbp:h-main" className="pb-8 mbp:pb-3 flex flex-col">
                <ButtonWithIcon 
                    to="/registration"     
                    color="bg-transparent" 
                    textColor="text-black"
                    className="flex flex-row items-center absolute top-3 right-2 text-sm"
                >
                    <UserIcon
                        width="w-4"
                        height="w-4"
                        className="mr-1"
                    />Join Now
                </ButtonWithIcon>
                <AuthTitle />
                <Rectangle className="flex flex-col mbp:flex-row" height="h-full">
                    <Rectangle className="flex justify-start sbp:justify-center pr-8 pl-3">
                        <div className="mt-8 sbp:mt-24 font-main">
                            <h2 className="text-2xl leading-10">Welcome Back...</h2>
                            <p className="text-xs font-thin leading-5">It's a pleasure to had you as a guest</p>
                        </div>
                    </Rectangle>
                    <Rectangle className="flex justify-center items-center py-10 px-3 sbp:px-32" height="h-full">
                        <FormWrapper className="sbp:mr-8 text-center px-8 py-10">
                            <form action="">
                                <Input 
                                    id="email"
                                    type="email"
                                    title="Email"
                                    errorText="Pleace Enter Valid Email"
                                    validators={[VALIDATOR_EMAIL()]}
                                    onInput={inputHandler}
                                />
                                <Input 
                                    id="password"
                                    type="password"
                                    title="Password"
                                    errorText="Pleace Enter Valid Password"
                                    validators={[VALIDATOR_MINLENGTH(6)]}
                                    onInput={inputHandler}
                                />
                                <Button 
                                    type="submit"
                                    label="submit"
                                    className="mt-3"
                                    isDisabled={!inputState.isValid}
                                />
                            </form>
                        </FormWrapper>
                    </Rectangle>
                </Rectangle>
            </Rectangle>
            <Rectangle>
                <Footer/>
            </Rectangle>
        </div>
    );
};

export default Login;