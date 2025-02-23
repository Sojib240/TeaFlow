import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import "swiper/css";
// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { flowComponentsData } from "../Utils/AditionalData";

const FlowComponent = () => {
    return (
        <>
            <div className="flex w-full justify-between px-5 sm:px-[14.44vw] items-center mb-10 sm:mb-[5vw] pt-32 sm:pt-[20vw] flex-wrap gap-5 sm:gap-[2vw]">
                <h2 className="text-3xl sm:text-[3.5vw] uppercase font-GolosRegular font-semibold">
                    choose your flow
                </h2>
                <Link
                    to={"/flows"}
                    className="text-sm sm:text-[1vw] flex gap-2 sm:gap-[0.4vw]  font-GolosRegular"
                >
                    <span className="block border-b">all flows</span>
                    <span className="mt-[-0.5vw] block">4</span>
                </Link>
            </div>
            {/*  */}
            {/* swiper */}
            <div className="pl-12 sm:pl-[14.44vw]">
                <Swiper
                    className="z-10"
                    loop
                    breakpoints={{
                        639: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                    }}
                    // slidesPerView={1}
                    spaceBetween={15}
                    centeredSlides={true}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                >
                    {flowComponentsData &&
                        flowComponentsData.map(({ image, id, title, desc }) => {
                            return (
                                <SwiperSlide key={id} className="select-none">
                                    <div
                                        className={`${
                                            id === 3 && "rounded-[4vw]"
                                        } overflow-hidden group`}
                                    >
                                        <img
                                            className=" w-full group-hover:scale-100 lg:group-hover:scale-125 duration-1200 transition-all"
                                            src={image}
                                            alt=""
                                        />
                                    </div>

                                    <h4 className="text-xl sm:text-[1.7vw] mt-3 sm:mt-[1vw] uppercase font-semibold">
                                        {title}
                                    </h4>
                                    <h5 className="text-sm sm:text-[0.9vw] text-[#B1ACAC] font-GolosRegular leading-[144%] sm:leading-[1.5vw] ">
                                        {desc}
                                    </h5>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
            {/*  */}
        </>
    );
};

export default FlowComponent;
