import React from "react";
import Button from "../../shared/form/components/Button";

import Input from "../../shared/form/components/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_EMAIL } from "../../shared/util/validators";

const EmailSubscription = props => {

    const [inputState, inputHandler] = useForm({
        email: {
            value: "",
            isValid: false
        },
    }, false);

    return (
        <div className="font-fbtn">
            <div className="mt-8 mb-2 text-2xl">{props.title}</div>
            <div>{props.discreption}</div>
            <div className="bg-dove-gray p-4 mt-2 mb-32">
                <form action="" className="flex justify-center place-items-center">
                    <Input 
                        id="email"
                        type="email"
                        noLabel={true}
                        placeholder="Enter Your Email"
                        validators={[VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                        marginButtom="mb-0"
                        width="w-80"
                        className="h-12 border-transparent"
                        paddingY="py-0"
                        bgField="bg-white"
                    />
                    <Button 
                        type="submit"
                        label="SUBSCRIBE"
                        className="text-white h-12"
                        isDisabled={!inputState.isValid}
                        bgColor="bg-java"
                        borderRadious="rounded-0"
                    />
                </form>
            </div>
        </div>
    );
};

export default EmailSubscription;