import React, { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Link, NavLink } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import Menu from "../Components/Menu";
import gsap from "gsap";
import { cartContextData } from "../Utils/CartContext";
import { motion } from "framer-motion";

const Navbar = ({
    CartOpenClose,
    setCartOpenClose,
    menuOpenClose,
    setmenuOpenClose,
}) => {
    //
    const [cart, setcart] = useContext(cartContextData);
    const navTopRef = useRef();
    useGSAP(() => {
        var prevScroll = window.scrollY;

        window.addEventListener("scroll", (e) => {
            const currentScroll = window.scrollY;
            if (prevScroll > currentScroll) {
                gsap.to(navTopRef.current, {
                    ease: "power4.out",
                    top: "0",
                });
            } else {
                gsap.to(navTopRef.current, {
                    ease: "power4.out",
                    top: "-15%",
                });
            }
            prevScroll = currentScroll;
        });
    });
    const menuImgRef = useRef();
    const menuOpen = () => {
        gsap.to(menuImgRef.current, {
            rotate: 45,
            scale: 1.2,
        });
    };
    //
    const opencloseMenu = (val) => {
        setmenuOpenClose(val);
        if (menuOpenClose === true) {
            setmenuOpenClose(false);
        }
    };
    return (
        <>
            <div
                ref={navTopRef}
                className="px-5 sm:px-[5.15vw] py-6 sm:py-[2vw] z-[999] fixed top-0 w-full bg-white"
            >
                <motion.nav
                    initial={{ opacity: 0, y: -150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 items-center"
                >
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
                        <nav
                            className={`hidden font-GolosRegular ${
                                menuOpenClose == true && "opacity-0 invisible"
                            } sm:flex items-center gap-[3vw]`}
                        >
                            <NavLink
                                to={`/catagory/${"products"}`}
                                className="text-[1vw] nav-link py-1"
                            >
                                shop
                            </NavLink>
                            <NavLink
                                to={"/about-us"}
                                className="text-[1vw] nav-link py-1"
                            >
                                about us
                            </NavLink>
                            <NavLink
                                to={"/journal"}
                                className="text-[1vw] nav-link py-1"
                            >
                                journal
                            </NavLink>
                            <NavLink
                                to={"/contact"}
                                className="text-[1vw] nav-link py-1"
                            >
                                contacts
                            </NavLink>
                        </nav>
                        <div className="flex gap-6 sm:gap-[2.5vw] items-center">
                            <div className="flex items-center gap-1 sm:gap-[0.2vw]">
                                <div
                                    onClick={() => setCartOpenClose(true)}
                                    className="w-4 sm:w-[1.3vw] mx-auto cursor-pointer"
                                >
                                    <img
                                        className="w-full"
                                        src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806619_icon-free-delivery.svg"
                                        alt=""
                                    />
                                </div>
                                <span className="text-[11px] flex justify-center items-center sm:text-[0.6vw] bg-[#000000] text-white rounded-full w-3 h-3 sm:w-[0.9vw] sm:h-[0.9vw] pointer-events-none ml-[-10px] sm:ml-[-0.7vw] mt-[-5px] sm:mt-[-0.5vw] font-GolosRegular">
                                    {cart.length}
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
                </motion.nav>
            </div>
            {CartOpenClose === true && (
                <CartPage
                    CartOpenClose={CartOpenClose}
                    setCartOpenClose={setCartOpenClose}
                />
            )}
            <Menu
                menuOpenClose={menuOpenClose}
                setmenuOpenClose={setmenuOpenClose}
            />
        </>
    );
};

export default Navbar;
