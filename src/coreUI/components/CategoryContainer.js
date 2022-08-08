import React from "react";

import CatogorySection from "./CatogorySection";
import MapImg from "../../assets/mapImg.svg";

const CategoryContainer = () => {
    return (
        <div className="flex items-center justify-around mt-8 mb-4">
            <CatogorySection />
            <div className="flex font-fbtn w-48 font-bold text-lg h-fit">"All good hotels tend to lead people to do things they wouldn`t necessarily do at home."</div>
            <div className="flex justify-center content-center">
                <img src={MapImg} alt="map" />
            </div>
        </div>
    );
}; 

export default CategoryContainer;