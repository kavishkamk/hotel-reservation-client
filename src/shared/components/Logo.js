import React from "react";

import LogoImg from "../../assets/logo.svg";

const Logo = props => {
    return (
        <div>
            <img src={LogoImg} alt="logo" className={`${props.width} ${props.height} ${props.className}`} />
        </div>
    );
};

export default Logo;