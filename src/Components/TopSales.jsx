import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const TopSales = () => {
    return (
        <div className="px-0 sm:px-[5.15vw] pt-16 sm:pt-[16vw] mx-auto w-full">
            <div className="">
                <div className="overflow-hidden h-auto w-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{once:true}}
                        transition={{
                            duration: 0.5,
                        }}
                        className="text-5xl sm:text-[14vw] text-center font-GolosBold"
                    >
                        TOP SALES
                    </motion.h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-[5vw] my-8 sm:my-[5vw]">
                    <div className="rounded-[4vw] overflow-hidden w-full sm:w-[60%] h-auto">
                        <motion.img
                            initial={{ scale: 1 }}
                            whileInView={{ scale: 1.4 }}
                            transition={{
                                duration: 2,
                            }}
                            className="w-full"
                            src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="w-full sm:w-[40%] flex flex-col justify-between pt-[6vw] pb-[3vw] px-5 sm:px-0">
                        <div className="">
                            <div className="overflow-hidden h-auto w-auto">
                                <motion.h4
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{once:true}}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="text-2xl sm:text-[2vw] uppercase mb-5 sm:mb-[1vw] font-GolosDemiBold"
                                >
                                    Green tea #2
                                </motion.h4>
                            </div>
                            <div className="overflow-hidden h-auto w-auto">
                                <motion.h5
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{once:true}}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="font-GolosRegular text-xl sm:text-[1.3vw]"
                                >
                                    $ 17
                                </motion.h5>
                            </div>
                        </div>
                        <div>
                            <div className="text-base sm:text-[1.1vw] mt-6 sm:mt-[1vw] font-GolosRegular leading-[144%] sm:leading-[2.5vw] flex flex-wrap gap-[6px] sm:gap-[0.4vw]">
                                {`Longjing is one of the ten 'Famous Teas of China". It is made of small tea leaves and buds, thanks to which it is drunk for a long time, and has a bright aroma and rich taste. In the manufacture of thin and flat leaves are obtained.`
                                    .split(" ")
                                    .map((text, index) => (
                                        <div key={index} className="overflow-hidden h-auto w-auto">
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
                                                    duration:  0.5,
                                                    delay: 0.01 * index,
                                                }}
                                            >
                                                {text}
                                            </motion.p>
                                        </div>
                                    ))}
                            </div>
                            <Link to={`/product/green-tea-2`}>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{once:true}}
                                    transition={{
                                        duration: 0.5, delay: 0.2,
                                    }}
                                    className="flex gap-2 sm:gap-[1vw] mt-6 sm:mt-[1.2vw] items-center cursor-pointer group font-GolosRegular"
                                >
                                    <span className="text-[12px] sm:text-[0.9vw] font-semibold uppercase tracking-[0.2vw]">
                                        Shop now
                                    </span>
                                    <span className="block w-10 sm:w-[4vw] group-hover:translate-x-[1.2vw] transition-all duration-300">
                                        <img
                                            className="w-full"
                                            src="/Images/Btn-icon.svg"
                                            alt=""
                                        />
                                    </span>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSales;
