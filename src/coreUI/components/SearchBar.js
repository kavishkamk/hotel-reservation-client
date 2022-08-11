import React from "react";

import Input from "../../shared/form/components/Input";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_DATE, VALIDATOR_NATURALNUM } from "../../shared/util/validators";
import Button from "../../shared/form/components/Button";
import VirticalLine from "../../shared/components/VirticalLine";

// tempary
import { CityList } from "../../tempData/SearchBarData";

const SearchBar = () => {

    const [inputState, inputHandler] = useForm({
        city: {
            value: "",
            isValid: false
        },
        checkinDate: {
            value: "",
            isValid: false
        },
        checkoutDate: {
            value: "",
            isValid: false
        },
        adults: {
            value: "",
            isValid: false
        }
    }, false);

    console.log(inputState);

    return (
        <div className="flex py-3 bg-dove-gray justify-center">
            <form className="flex justify-center content-center bg-white w-fit">
                <Input
                    id="city"
                    type="select"
                    title="Location"
                    data={CityList}
                    onInput={inputHandler}
                    validators={[VALIDATOR_REQUIRE()]}
                    className="outline-none"
                    sectionClass="flex-col py-3"
                />
                <VirticalLine className="border-l border-solid my-1 mx-3 border-l-black" />
                <Input
                    id="checkinDate"
                    type="date"
                    title="Check-in"
                    onInput={inputHandler}
                    validators={[VALIDATOR_DATE()]}
                    className="outline-none"
                    sectionClass="flex-col py-3"
                />
                <VirticalLine className="border-l border-solid my-1 mx-3 border-l-black" />
                <Input
                    id="checkoutDate"
                    type="date"
                    title="Check-out"
                    onInput={inputHandler}
                    validators={[VALIDATOR_DATE()]}
                    className="outline-none"
                    sectionClass="flex-col py-3"
                />
                <VirticalLine className="border-l border-solid my-1 mx-3 border-l-black" />
                <Input
                    id="adults"
                    type="number"
                    title="Adults"
                    onInput={inputHandler}
                    placeholder="00"
                    validators={[VALIDATOR_NATURALNUM()]}
                    className="outline-none w-28 class"
                    sectionClass="flex-col py-3"
                />
                <Button 
                    type="submit"
                    label="FIND HOTEL"
                    borderRadious="rounded-0"
                    className="h-full font-fbtn text-white"
                    bgColor="bg-saffron"
                    shadow="shadow-none"
                />
            </form>
        </div>
    );
};

export default SearchBar;