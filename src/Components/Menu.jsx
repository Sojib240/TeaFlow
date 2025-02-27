import gsap from "gsap";
import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ menuOpenClose, setmenuOpenClose, handleCategoriesFilter }) => {
    if (menuOpenClose === true) {
        gsap.from(".navMenuText", {
            opacity: 0,
            y: "3vw",
            stagger: 0.05,
        });
        gsap.from(".navMenuText3", {
            opacity: 0,
            y: "3.5vw",
            stagger: 0.1,
        });
        gsap.from(".navMenuText2", {
            opacity: 0,
            y: "3vw",
            stagger: 0.1,
        });
    }
    return (
        <div
            className={`w-full min-h-screen h-full overflow-x-auto fixed top-0 left-0 bg-white duration-200 transition-all z-[99] -translate-y-[100%] pb-5 sm:pb-0 pl-5 sm:pl-[59.25%] pr-5 sm:pr-0 flex flex-col pt-32 sm:pt-[15vw] md:pt-[15vw] lg:pt-[12vw] xl:pt-[9vw] font-GolosRegular ${
                menuOpenClose === true && "translate-y-0"
            }`}
        >
            <div className="flex flex-col gap-4 sm:gap-[1.1vw] font-GolosDemiBold">
                <Link
                    onClick={() => setmenuOpenClose(false)}
                    to={"/"}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase"
                >
                    home
                </Link>
                <Link
                    onClick={() => {
                        handleCategoriesFilter(7, "products"),
                            setmenuOpenClose(false);
                    }}
                    to={"/shop"}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase"
                >
                    products
                </Link>
                <Link
                    onClick={() => setmenuOpenClose(false)}
                    to={"/flows"}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase"
                >
                    flows
                </Link>
                <Link
                    onClick={() => {
                        handleCategoriesFilter(3, "top sales"),
                            setmenuOpenClose(false);
                    }}
                    to={"/shop"}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase"
                >
                    top sales
                </Link>
                <Link
                    onClick={() => setmenuOpenClose(false)}
                    to={"/journal"}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase"
                >
                    journal
                </Link>
            </div>
            <div className="flex gap-10 sm:gap-[6vw] mt-16 sm:mt-[5vw] flex-wrap">
                <div className="flex flex-col gap-2 sm:gap-[0.5vw]">
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/delivery"}
                        className="navMenuText3 text-lg sm:text-[1.1vw]"
                    >
                        delivery
                    </Link>
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/returns"}
                        className="navMenuText3 text-lg sm:text-[1.1vw]"
                    >
                        returns and exchanges
                    </Link>
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/privacyPolicy"}
                        className="navMenuText3 text-lg sm:text-[1.1vw]"
                    >
                        privacy policy
                    </Link>
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/TermsAndConditions"}
                        className="navMenuText3 text-lg sm:text-[1.1vw]"
                    >
                        terms and conditions
                    </Link>
                </div>
                <div className="navMenuText flex flex-col gap-2 sm:gap-[0.5vw]">
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/aboutUs"}
                        className="text-lg sm:text-[1.1vw]"
                    >
                        about us
                    </Link>
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/contact"}
                        className="navMenuText text-lg sm:text-[1.1vw]"
                    >
                        contacts
                    </Link>
                    <a
                        href="https://www.instagram.com/accounts/login/?next=%2Ftea_flow_usa%2F&source=omni_redirect"
                        target="blank"
                        to={"/"}
                        className="navMenuText text-lg sm:text-[1.1vw]"
                    >
                        instagram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;

//   z-50
