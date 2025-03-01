import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="px-5 sm:pl-[14.44vw] sm:pr-[16vw] mt-20 sm:mt-[23vw] mb-6 sm:mb-[4.5vw] font-GolosRegular flex flex-col gap-6 sm:gap-[7vw] overflow-hidden">
            <div className="flex justify-between">
                <div className="hidden sm:flex gap-[12vw]">
                    <div className="">
                        <div className="mb-[2.8vw] overflow-hidden w-auto h-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: "100%" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-[1.5vw] uppercase font-GolosDemiBold"
                            >
                                Shop
                            </motion.h2>
                        </div>
                        <div className="flex flex-col gap-[1.1vw] text-[1.1vw]">
                            <Link
                                to={"/"}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    home
                                </motion.p>
                            </Link>
                            <Link
                                to={`/catagory/${"products"}`}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    products
                                </motion.p>
                            </Link>
                            <Link
                                to={`/catagory/${"top-sales"}`}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    top sales
                                </motion.p>
                            </Link>
                            <Link
                                to={`/catagory/${"premium-tea"}`}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    premium tea
                                </motion.p>
                            </Link>
                            <Link
                                to={`/catagory/${"sets"}`}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    sets
                                </motion.p>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-[2.8vw] overflow-hidden w-auto h-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: "100%" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-[1.5vw] uppercase font-GolosDemiBold"
                            >
                                help
                            </motion.h2>
                        </div>
                        <div className="flex flex-col gap-[1.3vw] text-[1.1vw]">
                            <Link
                                to={"/delivery"}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    delivery
                                </motion.p>
                            </Link>
                            <Link
                                to={"/returns"}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    returns and exchanges
                                </motion.p>
                            </Link>
                            <Link
                                to={"/TermsAndConditions"}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    terms and conditions
                                </motion.p>
                            </Link>
                            <Link
                                to={"/PrivacyPolicy"}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    privacy policy
                                </motion.p>
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
                        <div className="mb-[2.8vw] overflow-hidden w-auto h-auto">
                            <motion.h2
                                initial={{ opacity: 0, y: "100%" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-[1.5vw] uppercase font-GolosDemiBold"
                            >
                                about us
                            </motion.h2>
                        </div>
                        <div className="flex flex-col gap-[1.3vw] text-[1.1vw]">
                            <Link
                                to={"/aboutUs"}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    about us
                                </motion.p>
                            </Link>
                            <Link
                                to={"/contact"}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    contacts
                                </motion.p>
                            </Link>
                            <Link
                                to={"/journal"}
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden w-auto h-auto"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    journal
                                </motion.p>
                            </Link>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-start gap-3 sm:gap-[1vw]"
                    >
                        <div>
                            <a
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden h-auto w-8 sm:w-[2vw] block m-auto"
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
                                className="hover:opacity-70 duration-100 transition-all overflow-hidden h-auto w-8 sm:w-[2vw] block m-auto"
                                href="#"
                            >
                                <img
                                    className="w-full"
                                    src="/Images/facebookI.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="overflow-hidden h-auto w-auto">
                <motion.div
                initial={{ opacity: 0, y: '100%' }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
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
                <a
                    href="https://gladkov.company/?r=teaflow"
                    target="_blank"
                    className="flex items-center gap-3 text-[15px] sm:text-[1vw]"
                >
                    design and development by{" "}
                    <span className="sm:w-[2.3vw]">
                        <img
                            className="w-full"
                            src="/Images/Logo-gladkov.svg"
                            alt=""
                        />
                    </span>
                </a>
            </motion.div>
            </div>
        </div>
    );
};

export default Footer;
