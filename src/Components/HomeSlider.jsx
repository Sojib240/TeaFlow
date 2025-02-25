import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "swiper/css";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { sliderData } from "../Utils/AditionalData";
import SliderTitle from "./SliderTitle";

const HomeSlider = () => {
    const [SliderTitleData, setSliderTitleData] = useState([]);
    const handleSliderContent = (sliDat) => {
        var slideIndex = sliDat.realIndex + 1;
        sliderData.forEach((item) => {
            if (slideIndex === item.id) {
                setSliderTitleData(item);
            }
        });
    };
    return (
        <div className="HomeSlider w-full flex-col-reverse sm:flex-row flex px-0 sm:px-[5.14vw]">
            <div className="w-full sm:w-[50%] px-5 sm:px-0 flex items-center">
                <SliderTitle SliderTitleData={SliderTitleData} />
            </div>
            {/* swiper */}
            <Swiper
                className="w-full sm:w-[50%] rounded-[5vw] overflow-hidden ml-auto z-10"
                onSlideChange={(e) => {
                    handleSliderContent(e)
                }}
                loop
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                {sliderData &&
                    sliderData.map((slide) => {
                        return (
                            <SwiperSlide
                                key={slide.id}
                                className="w-full h-full select-none"
                            >
                                <div className="h-full w-full">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={slide.image}
                                        alt=""
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
};

export default HomeSlider;
