import React from "react";
import { Link } from "react-router-dom";

const SliderTitle = (SliderTitleData) => {
    return (
        SliderTitleData && (
            <div className="z-50 relative pt-5">
                {/* <span className="block pl-[9vw]">{SliderTitleData.title}</span>
                <span className="block">{SliderTitleData.title2}</span>
                <span>{SliderTitleData.title3}</span> */}
                <div className="text-[10vw] sm:text-[6.6vw] uppercase font-GolosBold leading-[120%] sm:leading-[100%] whitespace-nowrap">
                    <span className="block pl-0 sm:pl-[9vw]">Relax with</span>
                    <span className="block">Rich Red</span>
                    <span>Tea #3</span>
                </div>
                <div className="pl-[9vw] w-full">
                    <div className="">
                        <p className="text-[1.1vw] font-GolosRegular w-[70%] mt-[5vw]">
                            Discover the complex aroma and sweet jam taste of
                            Golden Eyebrows - a deservedly popular red tea!
                        </p>
                    </div>
                    <div className="inline-block">
                        <Link
                            to={"/shop"}
                            className="flex gap-2 sm:gap-[1vw] mt-6 sm:mt-[1.5vw] items-center cursor-pointer group font-GolosRegular "
                        >
                            <span className="text-[12px] sm:text-[0.8vw] font-semibold uppercase tracking-[0.2vw]">
                                Shop now
                            </span>
                            <span className="block w-10 sm:w-[3.6vw] group-hover:translate-x-[1.2vw] transition-all duration-300">
                                <img
                                    className="w-full"
                                    src="/Images/Btn-icon.svg"
                                    alt=""
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        )
    );
};

export default SliderTitle;
