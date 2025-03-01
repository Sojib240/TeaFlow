import React from "react";
import Marquee from "react-fast-marquee";
import Discount from "../Common/Discount";
import FollowUs from "../Common/FollowUs";
import { motion } from "framer-motion";

const Contact = () => {
    document.title = "TeaFlow － Contact Us";
    return (
        <div>
            <div className="my-16 sm:my-[7vw] font-GolosRegular">
                <Marquee speed={280} direction="right" pauseOnClick>
                    <div className="overflow-hidden w-auto h-auto">
                        <motion.span
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="block text-5xl sm:text-[14vw] uppercase font-GolosBold whitespace-nowrap leading-[12.5vw]"
                        >
                            Contact Us Contact Us&#160;
                        </motion.span>
                    </div>
                </Marquee>
            </div>
            <div className="px-12 sm:px-[14.44vw] grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-[5vw] justify-between pt-8 sm:pt-[2vw] mb-24 sm:mb-[18vw]">
                <div className="">
                    <div className="overflow-hidden w-auto h-auto">
                        <motion.p
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw]"
                        >
                            515 W Broadway Glendale, CA91204
                        </motion.p>
                    </div>
                    <div className="overflow-hidden w-auto h-auto">
                        <motion.a
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="text-lg sm:text-[1.2vw] border-b inline-block border-dashed border-[#000]"
                            href=""
                        >
                            view on maps
                        </motion.a>
                    </div>
                </div>
                <div className="">
                    {/*  */}
                    <div className="overflow-hidden w-auto h-auto">
                        <motion.div
                            className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] "
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                            }}
                        >
                            support:
                        </motion.div>
                    </div>
                    <div className="overflow-hidden w-auto h-auto">
                        <motion.div
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                            }}
                            className=""
                        >
                            <a
                                className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] border-b border-dashed border-[#000]"
                                href=""
                            >
                                info@tea-flow.com
                            </a>{' , '}
                            <a
                                className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] border-b border-dashed border-[#000]"
                                href=""
                            >
                                whatsapp
                            </a>
                        </motion.div>
                    </div>
                    {/*  */}
                </div>
            </div>
            <div className="">
                <Discount />
            </div>
            <div className="mt-24 sm:mt-[12vw]">
                <FollowUs />
            </div>
        </div>
    );
};

export default Contact;
