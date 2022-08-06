import React from "react";

import FooterItem from "./FooterItem";
import { FacebookIcon, InstagramIcon, TwitterIcon, AppStoreIcon, PlayStore } from "../../svg/svgIconValues";
import IconBtn from "../../components/IconBtn";
import IconBar from "../../components/IconBar";
import ButtonWithIcon from "../../components/ButtonWithIcon";

const Footer = () => {
    return (
        <div className="bg-black flex font-main pt-5 pb-2 justify-around">
            <FooterItem title="Find & Book">
                Our Destinations<br />
                Find a Reservation<br />
                Meetings & Events<br />
            </FooterItem>
            <FooterItem title="The Golden Aurora Circle">
                Programme Overview<br />
                Join The Golden Aurora Circle<br />
                Account Overview<br />
                Book A Table<br />
                FAQ<br />
            </FooterItem>
            <FooterItem title="About The Golden Aurora">
                About Us<br />
                Our Hotel Brands<br />
                The Golden Aurora Centres<br />
                Residences<br />
                Contact Us<br />
            </FooterItem>
            <FooterItem>
                <IconBar className="justify-around mb-3">
                    <IconBtn to=""><FacebookIcon /></IconBtn>
                    <IconBtn to=""><InstagramIcon /></IconBtn>
                    <IconBtn to=""><TwitterIcon /></IconBtn>
                </IconBar>
                <IconBar flexDirection="flex-col" className="content-around gap-1">
                    <ButtonWithIcon to="" className="flex flex-row items-center" color="bg-silver-chalice"><PlayStore className="mr-2"/>Google Play</ButtonWithIcon>
                    <ButtonWithIcon to="" className="flex flex-row items-center" color="bg-silver-chalice"><AppStoreIcon className="mr-2" />App Store</ButtonWithIcon>
                </IconBar>
            </FooterItem>
        </div>
    );
};

export default Footer;