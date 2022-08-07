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

const Login = () => {
    return (
        <div className="relative font-main h-screen">
            <Rectangle height="h-2" color="bg-black"/>
            <Rectangle bgImage="bg-image2.svg" height="h-main" className="pb-3">
                <ButtonWithIcon 
                    to="" 
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
                <Rectangle className="flex" height="h-full">
                    <Rectangle className="flex justify-center pr-8">
                        <div className="mt-24 font-main">
                            <h2 className="text-2xl leading-10">Welcome Back...</h2>
                            <p className="text-xs font-thin leading-5">It's a pleasure to had you as a guest</p>
                        </div>
                    </Rectangle>
                    <Rectangle className="flex justify-center items-center py-10 px-32" height="h-full">
                        <FormWrapper className="mr-8 text-center">
                            <form action="">
                                <Input 
                                    id="email"
                                    type="email"
                                    onClick={() => {}}
                                    title="Email"
                                />
                                <Input 
                                    id="password"
                                    type="password"
                                    onClick={() => {}}
                                    title="Password"
                                />
                                <Button 
                                    type="submit"
                                    label="submit"
                                    className="mt-3"
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