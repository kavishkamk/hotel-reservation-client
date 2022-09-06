import React from "react";

import NavigationBar from "../../shared/navBar/components/NavigationBar";
import Footer from "../../shared/footer/components/Footer";
import AuthDisplay from "../components/AuthDisplay";
import EmailSubscription from "../components/EmailSubscription";
import SearchBar from "../components/SearchBar";
import CategoryContainer from "../components/CategoryContainer";
import ItemListContainer from "../components/ItemsListContainer";

const HotelDetails = () => {
    return (
        <div>
            <NavigationBar />
            <div className="bg-white pt-16 text-center">
                <CategoryContainer />
                <div className="font-main mb-1">Choose yout best hotel.</div>
                <SearchBar />
                {/* <ItemListContainer /> */}
                <hr className="w-1/2 m-auto"/>
                <AuthDisplay 
                    title="If you have not joined us yet," 
                    discreption="A hotel that is part of a hotel chain is known as a chain hotel. Independent hotels can also join a soft hotel brand or Independent Hotel Group, where they can take advantage of all the benefits offered by hotel chains without being held back by all the restrictions imposed. " 
                />
                <hr className="w-1/2 m-auto" />
                <EmailSubscription 
                    title="Enter Your Email"
                    discreption="Subscribe for exclusive bonuses, Free tips and news"
                />
            </div>
            <Footer />
        </div>
    );
};

export default HotelDetails;