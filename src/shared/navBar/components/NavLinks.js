import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = props => {
    return (
        <ul className={`no-underline m-0 p-0 w-full h-full flex justify-end items-center text-white font-main mr-8 ${props.className}`}>
            <li className="m-2 nav1:m-4">
                <NavLink to="/" exact className="border border-solid border-transparent no-underline p-2">Home</NavLink>
            </li>
            <li className="m-2 nav1:m-4">
                <NavLink to="/aboutUs" exact className="border border-solid border-transparent no-underline p-2">About Us</NavLink>
            </li>
            <li className="m-2 nav1:m-4">
                <NavLink to="/hotels" exact className="border border-solid border-transparent no-underline p-2">Hotels</NavLink>
            </li>
            <li className="m-2 nav1:m-4">
                <NavLink to="/gallery" exact className="border border-solid border-transparent no-underline p-2">Gallery</NavLink>
            </li>
            <li className="m-2 nav1:m-4">
                <NavLink to="/login" exact className="border border-solid border-transparent no-underline p-2">Login</NavLink>
            </li>
            <li className="m-2 nav1:m-4">
                <NavLink to="/registration" exact className="border border-solid border-transparent no-underline p-2">Join Now</NavLink>
            </li>
            <li className="m-2 nav1:m-4">
                <NavLink to="/logout" exact className="border border-solid border-transparent no-underline p-2">Logout</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;