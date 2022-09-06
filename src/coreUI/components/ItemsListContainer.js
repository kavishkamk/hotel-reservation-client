import React from "react";

import ItemContainer from "./ItemContainer";

import HotelImg from "../../assets/hotel1.png";

const ItemListContainer = props => {
    return (
        <div>
            <ItemContainer 
                src={HotelImg}
                alt={"sample hotel"}
                hotelName={"Aurora-Paradise, Mathale"}
                stars={4}
                discription="The city's beautiful hotel with its beautiful eco landscape."
            />
        </div>
    );
};

export default ItemListContainer;