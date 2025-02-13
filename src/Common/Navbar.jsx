import React from "react";
import { Link } from "react-router-dom";
import CartPage from "../Pages/CartPage";

const Navbar = ({ CartOpenClose, setCartOpenClose }) => {
    return (
        <>
            <div className="px-5 sm:px-[5.15vw] py-7 sm:py-[3vw]">
                <nav className="grid grid-cols-2 items-center">
                    <div className="col-span-1">
                        <Link to={"/"}>
                            <div className="logo w-32 sm:w-[8.5vw]">
                                <img
                                    className="w-full"
                                    src="/Images/TeaFlow_logo_black.svg"
                                    alt=""
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-1 flex justify-end sm:justify-between gap-[2vw]">
                        <div className="hidden sm:flex items-center gap-[3vw]">
                            <Link to={"/shop"} className="text-[1.1vw]">
                                shop
                            </Link>
                            <Link to={"/aboutUs"} className="text-[1.1vw]">
                                about us
                            </Link>
                            <Link to={"/journal"} className="text-[1.1vw]">
                                journal
                            </Link>
                            <Link to={"/contact"} className="text-[1.1vw]">
                                contacts
                            </Link>
                        </div>
                        <div className="flex gap-6 sm:gap-[2.5vw] items-center">
                            <div className="flex items-center gap-1 sm:gap-[0.2vw]">
                                <div
                                    onClick={() => setCartOpenClose(true)}
                                    className="w-6 sm:w-[1.7vw] mx-auto cursor-pointer"
                                >
                                    <img
                                        className="w-full"
                                        src="/Images/shopping-bag.png"
                                        alt=""
                                    />
                                </div>
                                <span className="font-light block text-lg sm:text-[1vw]">
                                    0
                                </span>
                            </div>
                            <div className="flex flex-col gap-3 sm:gap-[0.8vw]">
                                <span className="block w-8 sm:w-[2vw] h-[1px] bg-black"></span>
                                <span className="block w-8 sm:w-[2vw] h-[1px] bg-black"></span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {CartOpenClose === true && (
                <CartPage
                    CartOpenClose={CartOpenClose}
                    setCartOpenClose={setCartOpenClose}
                />
            )}
        </>
    );
};

export default Navbar;
