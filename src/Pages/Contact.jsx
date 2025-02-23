import React from "react";
import Marquee from "react-fast-marquee";
import Discount from "../Common/Discount";
import FollowUs from "../Common/FollowUs";

const Contact = () => {
    document.title = "TeaFlow － Contact Us";
    return (
        <div>
            <div className="my-16 sm:my-[7vw] font-GolosRegular">
                <Marquee speed={280} direction="right" pauseOnClick>
                    <div className="overflow-hidden">
                        <span className="block text-[14vw] uppercase font-GolosBold whitespace-nowrap leading-[12.5vw]">
                            Contact Us Contact Us&#160;
                        </span>
                    </div>
                </Marquee>
            </div>
            <div className="px-12 sm:px-[14.44vw] grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-[5vw] justify-between pt-8 sm:pt-[2vw] mb-24 sm:mb-[18vw]">
                <div className="">
                    <h5 className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mb-8 sm:mb-[5vw]">
                        515 W Broadway Glendale, <br /> CA91204
                    </h5>
                    <a
                        className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] border-b"
                        href=""
                    >
                        view on maps
                    </a>
                </div>
                <div className="">
                    <h5 className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mb-8 sm:mb-[5vw]">
                        support:
                    </h5>
                    <a
                        className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] border-b"
                        href=""
                    >
                        info@tea-flow.com
                    </a>
                    <div className="">
                        <a
                            className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] border-b"
                            href=""
                        >
                            whatsapp
                        </a>
                    </div>
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
