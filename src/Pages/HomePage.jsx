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

const HomePage = (
    {handleCategoriesFilter}
    // {handleTopSales}
) => {
    document.title = "TeaFlow － Premium Teas & Accessories";

    return (
        <>
            <HomeSlider />
            <FlowComponent />
            <TopSales />
            <AllTopSales 
            handleCategoriesFilter={handleCategoriesFilter}
            // handleTopSales={handleTopSales}
             />
            <div className="pb-[21vw] pt-[18vw]">
                <Marquess />
            </div>
            <Philosophy />
            <JournalComponent />
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
