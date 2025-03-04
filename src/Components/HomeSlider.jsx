import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "swiper/css";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { sliders } from "../Utils/AditionalData";
import SliderTitle from "./SliderTitle";
import { motion } from "framer-motion";

const HomeSlider = () => {
    const [SliderTitleData, setSliderTitleData] = useState([
        {
            id: 1,
            title: "Relax with",
            title2: "Rich Red",
            title3: "Tea #3",
            desc: "Discover the complex aroma and sweet jam taste of Golden Eyebrows - a deservedly popular red tea!",
            image: "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806659_Slide1-min-p-1080.jpeg",
            Path: `/product/red-tea-3`,
        },
    ]);
    const handleSliderContent = (e) => {
        var slideIndex = e.activeIndex;
        const filt = sliders.filter(({ id }) => {
            return id - 1 === slideIndex;
        });
        setSliderTitleData(filt);
    };

    return (
        <div className="HomeSlider w-full flex-col-reverse sm:flex-row flex px-0 sm:px-[5.14vw]">
            <div className="w-full sm:w-[50%] px-5 sm:px-0 flex items-center">
                <SliderTitle SliderTitleData={SliderTitleData} />
            </div>
            {/* swiper */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{once:true}}
                transition={{
                    duration: 0.5,
                }}
                className="w-full sm:w-[50%]"
            >
                <Swiper
                    className="rounded-[5vw] overflow-hidden ml-auto z-10"
                    onSlideChange={(e) => {
                        handleSliderContent(e);
                    }}
                    rewind={true}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                >
                    {sliders &&
                        sliders.map((slide) => {
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
            </motion.div>
        </div>
    );
};

export default HomeSlider;
