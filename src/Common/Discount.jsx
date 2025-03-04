import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Discount = () => {
    return (
        <div className="w-full rounded-4xl sm:rounded-[6vw] mx-auto bg-[#f7f7f7]">
            <div className="px-5 sm:px-[14.44vw] py-16 sm:py-[11vw] flex flex-col  items-center gap-10 sm:flex-row sm:items-end">
                <div className="w-full sm:w-[65%] text-left sm:text-left">
                    <div className="overflow-hidden w-auto h-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{once:true}}
                            transition={{ duration: 0.5 }}
                            className="text-4xl sm:text-[3.5vw] uppercase font-GolosDemiBold"
                        >
                            Get 20% off
                        </motion.h2>
                    </div>
                    <div className="text-base sm:text-[1.2vw] pt-[4vw] leading-[144%] sm:leading-[2.3vw] font-GolosRegular w-full max-w-[390px] sm:max-w-[30vw]">
                        <div className="flex flex-wrap gap-[6px] sm:gap-[0.4vw]">
                            {"Your first order + future sales updates. You can safely unsubscribe anytime from any email footer. Here is our"
                                .split(" ")
                                .map((text, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden h-auto"
                                    >
                                        <motion.p
                                            initial={{
                                                opacity: 0,
                                                y: "100%",
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{once:true}}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.01 * index,
                                            }}
                                        >
                                            {text}
                                        </motion.p>
                                    </div>
                                ))}
                            <Link to={"/privacy-policy"} href="#">
                                <div className="overflow-hidden w-auto h-auto">
                                    <motion.span
                                        className="inline-block border-b border-dashed border-[#DEDADA]"
                                        initial={{ opacity: 0, y: "100%" }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{once:true}}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.2,
                                        }}
                                    >
                                        privacy policy
                                    </motion.span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once:true}}
                    transition={{
                        duration: 0.5,
                    }}
                    className="w-full sm:w-[35%] border-b border-dashed border-[#DEDADA] flex justify-between pb-3 font-GolosRegular"
                >
                    <input
                        className="w-[82%] sm:w-[83%] outline-none text-base sm:text-[1.3vw]"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <button className="w-[18%] sm:w-[17%] cursor-pointer">
                        <img
                            className="w-full"
                            src="/Images/Btn-icon.svg"
                            alt=""
                        />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Discount;
