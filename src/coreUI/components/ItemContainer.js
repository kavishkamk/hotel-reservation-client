import React from "react";

import {getStarsAsUnicode} from "../function/RatingStars";

const ItemContainer = props => {
    
    const starsUnicode = getStarsAsUnicode(props.stars);

    return (
        <div className="flex bg-alto">
            <img src={props.src} alt={props.alt} width="200px" />
            <div className="bg-white text-left">
                <h3 className="w-full font-bold text-lg">{props.hotelName}  &nbsp;&nbsp;&nbsp;<span className="text-yellow-500">{starsUnicode.rate}</span>{starsUnicode.dark}</h3>
                <p className="w-full font-thin text-xxs">{props.discription}</p>
            </div>
        </div>
    );
};

export default ItemContainer;