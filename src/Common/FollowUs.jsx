import { motion } from "framer-motion";
import React, { useContext } from "react";
import { productContext } from "../Utils/Context";

const FollowUs = () => {
        const [productsApiData] = useContext(productContext);
    return (
        <div className="pl-5 sm:pl-[14.44vw] w-full">
            <div className="overflow-hidden h-auto w-auto">
                <motion.h2
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once:true}}
                    transition={{
                        duration: 0.5,
                    }}
                    className="uppercase text-4xl sm:text-[8vw] pb-[6vw] font-GolosBold"
                >
                    Follow us
                </motion.h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1.2vw] w-full font-GolosRegular">
                {productsApiData.followUs && productsApiData.followUs.map(({ id, image }, index) => {
                    return (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{once:true}}
                            transition={{
                                duration: 0.5,
                                delay: 0.1 * index,
                            }}
                            className={`${
                                id === 1 && "rounded-[4vw] "
                            } overflow-hidden group relative flex col-span-1`}
                        >
                            <img className="w-full" src={image} alt="" />
                            <a
                                href="https://www.instagram.com/accounts/login/?next=%2Ftea_flow_usa%2F&source=omni_redirect"
                                target="blank"
                                className="w-full h-full bg-black opacity-0 absolute top-0 left-0 group-hover:opacity-100 duration-300 transition-all text-white flex justify-center items-center text-[1.5vw]"
                            >
                                @tea_flow
                            </a>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FollowUs;
