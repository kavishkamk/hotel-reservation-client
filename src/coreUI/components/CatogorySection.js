import React from "react";

import CategoryBox from "../../shared/components/CategoryBox";
import CheckedItem from "../../shared/form/components/CheckedItem";

import { CATOGORY_DATA, ROOM_TYPE, STARS } from "../../tempData/CategoryData";

const CatogorySection = props => {
    return (
        <div className="bg-alto px-1 pb-1 w-fit">
        <div className="flex bg-white">
            <div>
                <CategoryBox
                    title="Category"
                >
                    {CATOGORY_DATA.map(category => (<CheckedItem key={category.id} title={category.category} />))}
                    
                </CategoryBox>
                <CategoryBox
                    title="Room Type"
                >
                    {STARS.map(type => (<CheckedItem key={type.id} title={type.stars + " stars"} />))}
                    
                </CategoryBox>
            </div>
            <CategoryBox
                title="Room Type"
            >
                {ROOM_TYPE.map(type => (<CheckedItem key={type.id} title={type.type} />))}
                
            </CategoryBox>
        </div>
        </div>
    );
};

export default CatogorySection;