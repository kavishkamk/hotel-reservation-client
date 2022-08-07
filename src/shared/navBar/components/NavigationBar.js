import React, {useState} from "react";
import { CSSTransition } from "react-transition-group"
 
import Logo from "../../components/Logo";
import NavLinks from "./NavLinks";
import IconBar from "../../components/IconBar";
import IconBtn from "../../components/IconBtn";
import { BellIcon, ListIcon, UserIcon2 } from "../../svg/svgIconValues";

import "./NavigationBar.css";

const NavigationBar = () => {

    const [isClicked, setIsClicked] = useState(false);
    const nodeRef = React.useRef(null);
    const changeNavStatus = () => setIsClicked(!isClicked);

    return (
        <div className="relative nav2:h-16 bg-black pb-1 flex flex-col nav2:flex-row nav2:pb-0 transition linear duration-200">
            <Logo height="h-16"className="ml-6" />
            <NavLinks className={`hidden nav2:flex nav2:flex-row`} />
            <CSSTransition in={isClicked} timeout={300} classNames="nav-bar" nodeRef={nodeRef} mountOnEnter unmountOnExit >
                <div ref={nodeRef}>
                    <NavLinks className={`flex flex-col nav2:hidden`} />
                </div>
            </CSSTransition>
            <IconBar className={`absolute right-2 top-5 ml-auto pr-4 nav2:hidden`} width="w-fill">
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