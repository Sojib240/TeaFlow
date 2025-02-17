import React, { useContext, useEffect } from "react";
import Discount from "../Common/Discount";
import FollowUs from "../Common/FollowUs";
import Philosophy from "../Common/Philosophy";
import TopSales from "../Components/TopSales";
import Marquess from "../Components/Marquess";
import { productContext } from "../Utils/Context";
import Delivery from "./Delivery";
import ProductsDetails from "./ProductsDetails";

const HomePage = () => {
    document.title = "TEAFLOW － PREMIUM TEAS & ACCESSORIES";
    // const [productsApiData, setproductsApiData] = useContext(productContext);
    // useEffect(() => {
    //     console.log(productsApiData);
    // });

    return (
        <>
            <div className="">
                <TopSales />
            </div>
            <div className="pb-[21vw] pt-[18vw]">
                <Marquess />
            </div>
            <div>
                <Philosophy />
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
