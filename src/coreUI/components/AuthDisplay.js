import React from "react";

import ButtonWithIcon from "../../shared/components/ButtonWithIcon";

const AuthDisplay = props => {
    return (
        <div className="font-fbtn">
            <div className="m-8 text-2xl">{props.title}</div>
            <div className="w-full text-center bg-dove-gray">
                <ButtonWithIcon 
                    to="/login" 
                    color="bg-eternity"
                    className="text-2xl inline-block w-32 p-4 m-3"
                >
                    Join Now
                </ButtonWithIcon>
                <ButtonWithIcon 
                    to="/login" 
                    color="bg-eternity"
                    className="text-2xl inline-block w-32 p-4 m-3"
                >
                    Login
                </ButtonWithIcon>
            </div>
            <div className="font-main font-thin mx-auto w-96 my-8">{props.discreption}</div>
        </div>
    );
};

export default AuthDisplay;