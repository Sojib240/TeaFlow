import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "swiper/css";
// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { productContext } from "../Utils/Context";
import { motion } from "framer-motion";

const FlowComponent = () => {
    const [productsApiData] = useContext(productContext);

    return (
        <>
            <div className="flex w-full justify-between px-5 sm:px-[14.44vw] items-center mb-10 sm:mb-[5vw] pt-20  sm:pt-[20vw] flex-wrap gap-5 sm:gap-[2vw]">
                <div className="overflow-hidden w-auto h-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y : 0 }}
                        viewport={{once:true}}
                        transition={{
                            duration: 0.5,
                        }}
                        className="flowsss text-4xl sm:text-[3.5vw] uppercase font-GolosRegular font-semibold w-full"
                    >
                        choose your flow
                    </motion.h2>
                </div>
                <Link to={"/flows"} className="overflow-hidden w-auto h-auto">
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{once:true}}
                        transition={{
                            duration: 0.5,
                        }}
                        className="text-sm sm:text-[1vw] flex gap-2 sm:gap-[0.4vw]  font-GolosRegular "
                    >
                        <span className="block border-b border-dashed border-[#000]">all flows</span>
                        <span className="block text-[12px] sm:text-[0.8vw]">4</span>
                    </motion.div>
                </Link>
            </div>
            {/* swiper */}
            <div className="pl-5 sm:pl-[14.44vw]">
                <Swiper
                    className="z-10"
                    rewind={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                    }}
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                >
                    {productsApiData.flows &&
                        productsApiData.flows.map(
                            ({ image, id, flowTitle, desc, slug }, index) => {
                                return (
                                    <SwiperSlide
                                        key={id}
                                        className="select-none"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 150 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{once:true}}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.1 * index,
                                            }}
                                            className=""
                                        >
                                            <div
                                                className={`${
                                                    id === 2 && "rounded-[4vw]"
                                                } overflow-hidden ${
                                                    id === 4 && "rounded-[4vw]"
                                                } group h-auto sm:h-[25vw]`}
                                            >
                                                <Link to={`/catagory/${slug}`}>
                                                    <img
                                                        className=" w-full group-hover:scale-100 lg:group-hover:scale-125 duration-1200 transition-all object-cover flex h-full"
                                                        src={image}
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>

                                            <h4 className="text-xl sm:text-[1.7vw] mt-3 sm:mt-[1vw] uppercase font-semibold">
                                                {flowTitle}
                                            </h4>
                                            <h5 className="text-sm sm:text-[0.9vw] text-[#B1ACAC] font-GolosRegular leading-[144%] sm:leading-[1.5vw] ">
                                                {desc}
                                            </h5>
                                        </motion.div>
                                    </SwiperSlide>
                                );
                            }
                        )}
                </Swiper>
            </div>
            {/*  */}
        </>
    );
};

export default FlowComponent;
