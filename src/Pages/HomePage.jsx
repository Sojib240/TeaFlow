import React, { useEffect, useState } from "react";
import Discount from "../Common/Discount";
import FollowUs from "../Common/FollowUs";
import Footer from "../Common/Footer";
import axios from "axios";
import Philosophy from "../Common/Philosophy";
import TopSales from "../Components/TopSales";
import Marquess from "../Components/Marquess";
import TermsAndConditions from "./TermsAndConditions";
import Returns from "./Returns";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import AboutUs from "./AboutUs";
// import app from "../firebaseConfig";
// import {getDatabase,ref,set,push} from "firebase/database"

const HomePage = () => {
    const [productsdata, setproductsdata] = useState([]);
    const callProducts = () => {
        const api =
            "https://teaflows-eed2e-default-rtdb.firebaseio.com/productsData.json";
        axios
            .get(api)
            .then((res) => {
                const formatedValue = Object.values(res.data);
                console.log(formatedValue[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        callProducts();
    }, []);

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
            {/* <TermsAndConditions /> */}
            {/* <Returns /> */}
            {/* <Contact /> */}
            {/* <PrivacyPolicy /> */}
            {/* <AboutUs /> */}
            
        </>
    );
};

export default HomePage;
