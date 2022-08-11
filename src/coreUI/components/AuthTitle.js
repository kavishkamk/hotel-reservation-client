import React from "react";

const AuthTitle = props => {
    return (
            props.isReg ? 
                <h1 className="font-main leading-10 drop-shadow-title text-3xl pt-7 px-3 text-center">Join The <span className="text-tahiti-gold">Golden</span> Aurora</h1>
                :
                <h1 className="font-main leading-10 drop-shadow-title text-3xl pt-7 px-3 text-center">Login The <span className="text-tahiti-gold">Golden</span> Aurora</h1>
    );
};

export default AuthTitle;