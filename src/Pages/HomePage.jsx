import React from "react";
import Discount from "../Common/Discount";
import FollowUs from "../Common/FollowUs";
import Philosophy from "../Common/Philosophy";
import TopSales from "../Components/TopSales";
import Marquess from "../Components/Marquess";
import JournalComponent from "../Common/JournalComponent";
import HomeSlider from "../Components/HomeSlider";

const HomePage = () => {
    document.title = "TEAFLOW － PREMIUM TEAS & ACCESSORIES";

    return (
        <>
            <div className="">
                <HomeSlider />
            </div>
            <div className="">
                <TopSales />
            </div>
            <div className="pb-[21vw] pt-[18vw]">
                <Marquess />
            </div>
            <div>
                <Philosophy />
            </div>
            <div className="">
                <JournalComponent />
            </div>
            <div className="mt-[15vw]">
                <Discount />
            </div>
            <div className="pt-[16vw]">
                <FollowUs />
            </div>
        </>
    );
};

export default HomePage;
