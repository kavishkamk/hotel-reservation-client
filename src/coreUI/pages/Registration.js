import React from "react";

import Rectangle from "../../shared/components/Rectangle";
import ButtonWithIcon from "../../shared/components/ButtonWithIcon";
import AuthTitle from "../components/AuthTitle";
import Footer from "../../shared/footer/components/Footer";
import { UserIcon } from "../../shared/svg/svgIconValues";
import FormWrapper from "../../shared/form/components/FormWrapper";
import Input from "../../shared/form/components/Input";
import Button from "../../shared/form/components/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_EQUAL, VALIDATOR_ZIP } from "../../shared/util/validators";

const Registration = () => {

    const [inputState, inputHandler] = useForm({
        firstName: {
            value: "",
            isValid: false
        },
        lastName: {
            value: "",
            isValid: false
        },
        contactNo: {
            value: "",
            isValid: false
        },
        email: {
            value: "",
            isValid: false
        },
        country: {
            value: "",
            isValid: false
        },
        address: {
            value: "",
            isValid: false
        },
        zip: {
            value: "",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        },
        cpassword: {
            value: "",
            isValid: false
        }
    }, false);

    return (
        <div className="relative font-main">
            <Rectangle height="h-2" color="bg-black"/>
            <Rectangle bgImage="bg-image2.svg" height="h-full" className="pb-8 mbp:pb-3 flex flex-col">
                <ButtonWithIcon 
                    to="/login"
                    color="bg-transparent" 
                    textColor="text-black"
                    className="flex flex-row items-center absolute top-3 right-2 text-sm z-10"
                >
                    <UserIcon
                        width="w-4"
                         height="w-4"
                        className="mr-1"
                    />Sign In
                </ButtonWithIcon>
                <AuthTitle isReg={true}/>
                <Rectangle className="flex  flex-col-reverse mbp:flex-row" height="h-full">
                    <Rectangle className="flex justify-center items-center py-5 px-3 sbp:px-32" height="h-full">
                        <FormWrapper className="mbp:mr-8 text-center px-8 py-4">
                            <form action="">
                                <Input 
                                    id="firstName"
                                    type="text"
                                    title="First Name"
                                    errorText="Pleace Enter First Name"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    textSize = "text-xxs"
                                    marginButtom= "mb-0"
                                    paddingY="p-0"
                                />
                                <Input 
                                    id="lastName"
                                    type="text"
                                    title="Last Name"
                                    errorText="Pleace Enter Last Name"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    textSize = "text-xxs"
                                    marginButtom= "mb-0"
                                    paddingY="p-0"
                                />
                                <Input 
                                    id="contactNo"
                                    type="tel"
                                    title="Contact No"
                                    errorText="Pleace Enter Valid Contact Number"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    textSize = "text-xxs"
                                    marginButtom= "mb-0"
                                    paddingY="p-0"
                                />
                                <Input 
                                    id="email"
                                    type="email"
                                    title="Email"
                                    errorText="Pleace Enter Valid Email"
                                    validators={[VALIDATOR_EMAIL()]}
                                    onInput={inputHandler}
                                    textSize = "text-xxs"
                                    marginButtom= "mb-0"
                                    paddingY="p-0"
                                />
                                <Input 
                                    id="country"
                                    type="text"
                                    title="Country/Region"
                                    errorText="Pleace Enter Country or Region"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    textSize = "text-xxs"
                                    marginButtom= "mb-0"
                                    paddingY="p-0"
                                />
                                <Input 
                                    id="address"
                                    type="text"
                                    title="Address"
                                    errorText="Pleace Enter Address"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    onInput={inputHandler}
                                    textSize = "text-xxs"
                                    marginButtom= "mb-0"
                                    paddingY="p-0"
                                />
                                <Input 
                                    id="zip"
                                    type="text"
                                    title="Zip"
                                    errorText="Pleace Enter Valid Zip code"
                                    validators={[VALIDATOR_ZIP()]}
                                    onInput={inputHandler}
                                    textSize = "text-xxs"
                                    marginButtom= "mb-0"
                                    paddingY="p-0"
                                />
                                <Input 
                                    id="password"
                                    type="password"
                                    title="Password"
                                    errorText="Pleace Enter Valid Password"
                                    validators={[VALIDATOR_MINLENGTH(6)]}
                                    onInput={inputHandler}
                                    textSize = "text-xxs"
                                    marginButtom= "mb-0"
                                    paddingY="p-0"
                                />
                                <Input 
                                    id="cpassword"
                                    type="password"
                                    title="Confirm Password"
                                    errorText="Pleace Enter Same Password"
                                    validators={[VALIDATOR_EQUAL(inputState.inputs.password.value)]}
                                    onInput={inputHandler}
                                    textSize = "text-xxs"
                                    marginButtom= "mb-0"
                                    paddingY="p-0"
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
                    <Rectangle className="flex justify-start sbp:justify-center sbp:text-center pr-8 pl-3">
                        <div className="mt-4 mbp:mt-24 font-main">
                            <h2 className="text-2xl leading-10">Welcoming you... </h2>
                            <p className="text-xs font-thin leading-5">We will do everything we can to make you happy</p>
                        </div>
                    </Rectangle>
                </Rectangle>
            </Rectangle>
            <Rectangle>
                    <Footer/>
            </Rectangle>
        </div>
    );
};

export default Registration;