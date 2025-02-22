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

const FlowComponent = () => {
    return (
        <>
            <div className="flex w-full justify-between px-5 sm:px-[14.44vw] items-center mb-10 sm:mb-[5vw] pt-32 sm:pt-[20vw] flex-wrap gap-5 sm:gap-[2vw]">
                <h2 className="text-[28px] sm:text-[3.5vw] uppercase font-GolosRegular font-semibold">
                    choose your flow
                </h2>
                <Link
                    to={"/flows"}
                    className="text-base sm:text-[1vw] flex gap-2 sm:gap-[0.4vw]  font-GolosRegular"
                >
                    <span className="block border-b">all flows</span>
                    <span className="mt-[-0.5vw] block">4</span>
                </Link>
            </div>
            {/*  */}
            {/* swiper */}
            <div className="pl-5 sm:pl-[14.44vw]">
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
                    <SwiperSlide className="select-none">
                        <div className="">
                            <img
                                className="w-full"
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806684_relax%20fl-min.jpg"
                                alt=""
                            />
                        </div>

                        <h4 className="text-xl sm:text-[1.7vw] mt-3 sm:mt-[1vw] uppercase font-semibold">
                            relax flow
                        </h4>
                        <h5 className="text-sm sm:text-[0.9vw] text-[#B1ACAC] font-GolosRegular leading-[144%] sm:leading-[1.5vw] ">
                            Teas that help you to find your inner calm and
                            unwind
                        </h5>
                    </SwiperSlide>
                    <SwiperSlide className="select-none">
                        <div className="">
                            <img
                                className="w-full"
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806686_life%20fl-min.jpg"
                                alt=""
                            />
                        </div>

                        <h4 className="text-xl sm:text-[1.7vw] mt-3 sm:mt-[1vw] uppercase font-semibold">
                            {" "}
                            Life flow
                        </h4>
                        <h5 className="text-sm sm:text-[0.9vw] text-[#B1ACAC] font-GolosRegular leading-[144%] sm:leading-[1.5vw] ">
                            Designed to promote wellness and balance in your
                            daily life
                        </h5>
                    </SwiperSlide>
                    <SwiperSlide className="select-none">
                        <div className="rounded-[4vw] overflow-hidden">
                            <img
                                className="w-full"
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806682_shu-2.jpg"
                                alt=""
                            />
                        </div>
                        <h4 className="text-xl sm:text-[1.7vw] mt-3 sm:mt-[1vw] uppercase font-semibold">
                            Awareness Flow
                        </h4>
                        <h5 className="text-sm sm:text-[0.9vw] text-[#B1ACAC] font-GolosRegular leading-[144%] sm:leading-[1.5vw] ">
                            Teas that will help you slow down for a moment and
                            reconnect with yourself
                        </h5>
                    </SwiperSlide>
                    <SwiperSlide className="select-none">
                        <div className="">
                            <img
                                className="w-full"
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806688_awareness%20fl-min-1.jpg"
                                alt=""
                            />
                        </div>
                        <h4 className="text-xl sm:text-[1.7vw] mt-3 sm:mt-[1vw] uppercase font-semibold">
                            ENERGY flow
                        </h4>
                        <h5 className="text-sm sm:text-[0.9vw] text-[#B1ACAC] font-GolosRegular leading-[144%] sm:leading-[1.5vw] ">
                            Perfect for those who looking for a natural boost of
                            energy
                        </h5>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/*  */}
        </>
    );
};

export default FlowComponent;
