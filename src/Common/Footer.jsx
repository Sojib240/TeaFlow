import React from "react";
import { Link } from "react-router-dom";

const Footer = ({handleCategoriesFilter}) => {
    return (
        <div className="px-5 sm:pl-[14.44vw] sm:pr-[16vw] pt-20 sm:pt-[23vw] font-GolosRegular">
            <div className="flex justify-between">
                <div className="hidden sm:flex gap-[12vw]">
                    <div className="">
                        <div className="mb-[2.8vw]">
                            <h2 className="text-[1.5vw] uppercase font-GolosDemiBold">
                                Shop
                            </h2>
                        </div>
                        <div className="flex flex-col gap-[1.1vw]">
                            <Link
                                to={"/"}
                                className="text-[1.1vw] hover:opacity-70 duration-100 transition-all"
                            >
                                home
                            </Link>
                            <Link onClick={()=>handleCategoriesFilter(8,'products')} to={'/shop'} className="text-[1.1vw] hover:opacity-70 duration-100 transition-all">
                                products
                            </Link>
                            <Link onClick={()=>handleCategoriesFilter(4,"top sales")} to={'/shop'} className="text-[1.1vw] hover:opacity-70 duration-100 transition-all">
                                top sales
                            </Link>
                            <Link onClick={()=>handleCategoriesFilter(2,"premium tea")} to={'/shop'}  className="text-[1.1vw] hover:opacity-70 duration-100 transition-all">
                                premium tea
                            </Link>
                            <Link onClick={()=>handleCategoriesFilter(3,"sets")} to={'/shop'} className="text-[1.1vw] hover:opacity-70 duration-100 transition-all">
                                set
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-[2.8vw]">
                            <h2 className="text-[1.5vw] uppercase font-GolosDemiBold">
                                Help
                            </h2>
                        </div>
                        <div className="flex flex-col gap-[1.3vw]">
                            <Link to={'/delivery'} className="text-[1.1vw] hover:opacity-70 duration-100 transition-all">
                                delivery
                            </Link>
                            <Link
                                to={"/returns"}
                                className="text-[1.1vw] hover:opacity-70 duration-100 transition-all"
                            >
                                returns and exchanges
                            </Link>
                            <Link
                                to={"/TermsAndConditions"}
                                className="text-[1.1vw] hover:opacity-70 duration-100 transition-all"
                            >
                                terms and conditions
                            </Link>
                            <Link
                                to={"/PrivacyPolicy"}
                                className="text-[1.1vw] hover:opacity-70 duration-100 transition-all"
                            >
                                privacy policy
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-28 block sm:hidden">
                    <img
                        className="w-full"
                        src="/Images/TeaFlow_logo_black.svg"
                        alt=""
                    />
                </div>
                <div className="flex justify-end gap-[12vw] ">
                    <div className="hidden sm:block">
                        <div className="mb-[2.8vw]">
                            <h2 className="text-[1.5vw] uppercase font-GolosDemiBold">
                                about us
                            </h2>
                        </div>
                        <div className="flex flex-col gap-[1.3vw]">
                            <Link
                                to={"/aboutUs"}
                                className="text-[1.1vw] hover:opacity-70 duration-100 transition-all"
                            >
                                about us
                            </Link>
                            <Link
                                to={"/contact"}
                                className="text-[1.1vw] hover:opacity-70 duration-100 transition-all"
                            >
                                contacts
                            </Link>
                            <Link
                                to={"/journal"}
                                className="text-[1.1vw] hover:opacity-70 duration-100 transition-all"
                            >
                                journal
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-[1vw]">
                        <div className="">
                            <a
                                className="hover:opacity-70 duration-100 transition-all w-8 sm:w-[2vw] block m-auto"
                                href="#"
                            >
                                <img
                                    className="w-full"
                                    src="/Images/InstagramI.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="">
                            <a
                                className="hover:opacity-70 duration-100 transition-all w-8 sm:w-[2vw] block m-auto"
                                href="#"
                            >
                                <img
                                    className="w-full"
                                    src="/Images/facebookI.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between  pt-6 sm:pt-[7vw] pb-[4.5vw]">
                <div className="flex gap-[9vw]">
                    <div className="w-[9vw] hidden sm:block">
                        <img
                            className="w-full"
                            src="/Images/TeaFlow_logo_black.svg"
                            alt=""
                        />
                    </div>
                    <p className="text-[15px] sm:text-[0.9vw]">
                        © 2024 Tea flow
                    </p>
                </div>
                <a href="https://gladkov.company/?r=teaflow" target="_blank" className="flex items-center gap-3 text-[15px] sm:text-[1vw]">
                    design and development by{" "}
                    <span className="sm:w-[2.3vw]">
                        <img
                            className="w-full"
                            src="/Images/Logo-gladkov.svg"
                            alt=""
                        />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Footer;
