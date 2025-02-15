import React from "react";
import { Link } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import Menu from "../Components/Menu";

const Navbar = ({
    CartOpenClose,
    setCartOpenClose,
    menuOpenClose,
    setmenuOpenClose,
}) => {
    const opencloseMenu = (val) => {
        setmenuOpenClose(val);
        if (menuOpenClose === true) {
            setmenuOpenClose(false);
        }
    };
    return (
        <>
            <div className="px-5 sm:px-[5.15vw] py-6 sm:py-[3vw] z-[999] fixed top-0 w-full bg-white">
                <nav className="grid grid-cols-2 items-center">
                    <div className="col-span-1">
                        <div className="logo w-32 sm:w-[8.5vw]">
                            <Link to={"/"}>
                                <img
                                    className="w-full"
                                    src="/Images/TeaFlow_logo_black.svg"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-end sm:justify-between gap-[2vw]">
                        <div
                            className={`hidden ${
                                menuOpenClose == true && "opacity-0 invisible"
                            } sm:flex items-center gap-[3vw]`}
                        >
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
                            <div
                                onClick={() => opencloseMenu(true)}
                                className={`flex flex-col items-center justify-center w-8 sm:w-[2vw] gap-3 sm:gap-[0.7vw] h-8 sm:h-[2vw] cursor-pointer duration-300 transition-all ${
                                    menuOpenClose == true && "!gap-0"
                                }`}
                            >
                                <span
                                    className={`block w-8 sm:w-[2vw] duration-300 transition-all h-[1px] bg-black  origin-center ${
                                        menuOpenClose === true && "rotate-45"
                                    }`}
                                ></span>
                                <span
                                    className={`block w-8 sm:w-[2vw] h-[1px] duration-300 transition-all bg-black origin-center ${
                                        menuOpenClose === true && "-rotate-45"
                                    }`}
                                ></span>
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
            {/* {menuOpenClose === true && (

            )} */}
            <Menu
                menuOpenClose={menuOpenClose}
                setmenuOpenClose={setmenuOpenClose}
            />
        </>
    );
};

export default Navbar;
