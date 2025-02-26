import React from "react";
import Discount from "../Common/Discount";
import FollowUs from "../Common/FollowUs";
import Philosophy from "../Common/Philosophy";
import TopSales from "../Components/TopSales";
import Marquess from "../Components/Marquess";
import JournalComponent from "../Common/JournalComponent";
import HomeSlider from "../Components/HomeSlider";
import FlowComponent from "../Components/FlowComponent";
import AllTopSales from "../Components/AllTopSales";

const HomePage = ({ handleCategoriesFilter }) => {
    document.title = "TeaFlow － Premium Teas & Accessories";

    return (
        <>
            <HomeSlider />
            <FlowComponent />
            <TopSales />
            <AllTopSales
                handleCategoriesFilter={handleCategoriesFilter}
            />
            <div className="pb-16 sm:pb-[16vw] pt-16 sm:pt-[16vw]">
                <Marquess />
            </div>
            <Philosophy />
            <JournalComponent />
            <div className="mt-16 sm:mt-[16vw]">
                <Discount />
            </div>
            <div className="pt-16 sm:pt-[16vw]">
                <FollowUs />
            </div>
        </>
    );
};

export default HomePage;
