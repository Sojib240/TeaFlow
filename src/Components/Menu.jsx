import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = ({ menuOpenClose, setmenuOpenClose }) => {
    return (
        <div
            className={`w-full min-h-svh sm:min-h-screen h-full overflow-x-auto fixed top-0 left-0 bg-white duration-200 transition-all z-[99] -translate-y-[100%] pb-5 sm:pb-0 pl-5 sm:pl-[59.25%] pr-5 sm:pr-0 flex flex-col pt-32 sm:pt-[15vw] md:pt-[15vw] lg:pt-[12vw] xl:pt-[9vw] opacity-0 font-GolosRegular invisible ${
                menuOpenClose === true && "translate-y-0 visible opacity-100"
            }`}
        >
            <div className="flex flex-col gap-4 sm:gap-[1.1vw] font-GolosDemiBold">
                <Link
                    onClick={() => setmenuOpenClose(false)}
                    to={"/"}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase overflow-hidden w-auto h-auto"
                >
                    <motion.p
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        home
                    </motion.p>
                </Link>
                <Link
                    onClick={() => setmenuOpenClose(false)}
                    to={`/catagory/${"products"}`}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase overflow-hidden w-auto h-auto"
                >
                    <motion.p
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        products
                    </motion.p>
                </Link>
                <Link
                    onClick={() => setmenuOpenClose(false)}
                    to={"/flows"}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase overflow-hidden w-auto h-auto"
                >
                    <motion.p
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        flows
                    </motion.p>
                </Link>
                <Link
                    onClick={() => setmenuOpenClose(false)}
                    to={`/catagory/top-sales`}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase overflow-hidden w-auto h-auto"
                >
                    <motion.p
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        top sales
                    </motion.p>
                </Link>
                <Link
                    onClick={() => setmenuOpenClose(false)}
                    to={"/journal"}
                    className="navMenuText2 text-5xl sm:text-[3.5vw] font-bold uppercase overflow-hidden w-auto h-auto"
                >
                    <motion.p
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                    >
                        journal
                    </motion.p>
                </Link>
            </div>
            <div className="flex gap-10 sm:gap-[6vw] mt-16 sm:mt-[5vw] flex-wrap">
                <div className="flex flex-col gap-2 sm:gap-[0.5vw]">
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/delivery"}
                        className="navMenuText3 text-lg sm:text-[1.1vw] overflow-hidden w-auto h-auto"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            delivery
                        </motion.p>
                    </Link>
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/returns"}
                        className="navMenuText3 text-lg sm:text-[1.1vw]  overflow-hidden w-auto h-auto "
                    >
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            returns and exchanges
                        </motion.p>
                    </Link>
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/privacy-policy"}
                        className="navMenuText3 text-lg sm:text-[1.1vw]  overflow-hidden w-auto h-auto "
                    >
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            privacy policy
                        </motion.p>
                    </Link>
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/terms-and-conditions"}
                        className="navMenuText3 text-lg sm:text-[1.1vw]  overflow-hidden w-auto h-auto "
                    >
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                        >
                            terms and conditions
                        </motion.p>
                    </Link>
                </div>
                <div className="navMenuText flex flex-col gap-2 sm:gap-[0.5vw]  overflow-hidden w-auto h-auto ">
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/about-us"}
                        className="text-lg sm:text-[1.1vw]"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            about us
                        </motion.p>
                    </Link>
                    <Link
                        onClick={() => setmenuOpenClose(false)}
                        to={"/contact"}
                        className="navMenuText text-lg sm:text-[1.1vw] overflow-hidden w-auto h-auto "
                    >
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            contacts
                        </motion.p>
                    </Link>
                    <a
                        href="https://www.instagram.com/accounts/login/?next=%2Ftea_flow_usa%2F&source=omni_redirect"
                        target="blank"
                        to={"/"}
                        className="navMenuText text-lg sm:text-[1.1vw] overflow-hidden w-auto h-auto "
                    >
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            instagram
                        </motion.p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;

//   z-50
