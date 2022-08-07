import React, {useState} from "react";

import Logo from "../../components/Logo";
import NavLinks from "./NavLinks";
import IconBar from "../../components/IconBar";
import IconBtn from "../../components/IconBtn";
import { BellIcon, ListIcon, UserIcon2 } from "../../svg/svgIconValues";

const NavigationBar = () => {

    const [isClicked, setIsClicked] = useState(false);

    const changeNavStatus = () => setIsClicked(!isClicked);

    return (
        <div className="relative nav2:h-16 bg-black pb-3 flex flex-col nav2:flex-row nav2:pb-0">
            <Logo height="h-16"className="ml-6" />
            <NavLinks className={`hidden nav2:flex nav2:flex-row`} />
            <NavLinks className={`${!isClicked  && "hidden" } flex flex-col nav2:hidden`} />
            <IconBar className={`absolute right-2 top-3 ml-auto pr-4 nav2:hidden`} width="w-fill">
                <IconBtn onClick={changeNavStatus}><ListIcon /></IconBtn>
            </IconBar>
            <IconBar className="justify-center place-self-center hidden nav2:flex">
                <IconBtn to=""><BellIcon className="mr-4"/></IconBtn>
                <IconBtn to=""><UserIcon2 /></IconBtn>
            </IconBar>
        </div>
    );
};

export default NavigationBar;