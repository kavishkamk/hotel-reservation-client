/*
    login page of the application
*/

import React from "react";

import Rectangle from "../../shared/components/Rectangle";
import Footer from "../../shared/footer/components/Footer";

const Login = () => {
    return (
        <div>
            <Rectangle height="h-2" color="bg-black" />
            <Rectangle bgImage="bg-image1.svg" height="h-16"/>
            <Footer />
        </div>
    );
};

export default Login;