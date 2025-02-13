import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ menuOpenClose, setmenuOpenClose }) => {
    return (
        <div
            className={`w-full h-screen fixed top-0 left-0 bg-white duration-200 transition-all z-[99] -translate-y-[100%] pl-5 sm:pl-[59.25%] pr-5 sm:pr-0 flex flex-col pt-32 sm:pt-[15vw] md:pt-[15vw] lg:pt-[12vw] xl:pt-[9vw] ${
                menuOpenClose === true && "translate-y-0"
            }`}
        >
            <div className="flex flex-col gap-4 sm:gap-[1.1vw]">
                <Link
                    to={"/"}
                    className="text-5xl sm:text-[3.5vw] font-bold uppercase"
                >
                    home
                </Link>
                <h2 className="text-5xl sm:text-[3.5vw] font-bold uppercase">
                    products
                </h2>
                <h2 className="text-5xl sm:text-[3.5vw] font-bold uppercase">
                    flows
                </h2>
                <h2 className="text-5xl sm:text-[3.5vw] font-bold uppercase">
                    top sales
                </h2>
                <Link
                    to={"/journal"}
                    className="text-5xl sm:text-[3.5vw] font-bold uppercase"
                >
                    journal
                </Link>
            </div>
            <div className="flex gap-10 sm:gap-[6vw] mt-16 sm:mt-[5vw]">
                <div className="flex flex-col gap-2 sm:gap-[0.5vw]">
                    <Link to={"/"} className="text-lg sm:text-[1.1vw]">
                        delivery
                    </Link>
                    <Link to={"/returns"} className="text-lg sm:text-[1.1vw]">
                        returns and exchanges
                    </Link>
                    <Link
                        to={"/PrivacyPolicy"}
                        className="text-lg sm:text-[1.1vw]"
                    >
                        privacy policy
                    </Link>
                    <Link
                        to={"/TermsAndConditions"}
                        className="text-lg sm:text-[1.1vw]"
                    >
                        terms and conditions
                    </Link>
                </div>
                <div className="flex flex-col gap-2 sm:gap-[0.5vw]">
                    <Link to={"/aboutUs"} className="text-lg sm:text-[1.1vw]">
                        about us
                    </Link>
                    <Link to={"/contact"} className="text-lg sm:text-[1.1vw]">
                        contacts
                    </Link>
                    <Link to={"/"} className="text-lg sm:text-[1.1vw]">
                        instagram
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;

//   z-50
