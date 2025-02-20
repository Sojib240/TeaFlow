import React from "react";
import Discount from "../Common/Discount";
import Title from "../Common/Title";

const Delivery = () => {
    document.title = "DELIVERY － TEAFLOW";
    return (
        <>
            <Title text={'delivery'}/>
            <div className="px-5 sm:pl-[14.44vw] sm:pr-[32vw] mx-auto mt-16 sm:mt-[7vw] font-GolosRegular">
                <div className="text-lg sm:text-[1.2vw] leading-[144%] sm:leading-[2.3vw]">
                    <span>
                        For questions or comments please call us toll free at
                        email{" "}
                        <a className="underline text-blue-700" href="">
                            info@tea-flow.com
                        </a>
                    </span>
                    <span className="block mt-5 sm:mt-[1.2vw] leading-[144%]">
                        All orders have an additional 1-3 day processing time,
                        depending on the time of year and promotional
                        periods.Orders placed on the weekend or holidays do not
                        enter processing time until the next business day.Our
                        offices are closed on weekends and holidays, and
                        therefore we do not ship on those days.
                    </span>
                    <span className="flex mt-5 sm:mt-[1.2vw] font-bold">
                        ‍Check current{" "}
                        <a className="underline text-blue-700 ml-2" href="">
                            Fedex Shipping Delays here.
                        </a>
                    </span>
                </div>

                <div className="mt-[5vw]">
                    <h4 className="mb-6 sm:mb-[1vw] text-2xl sm:text-[1.7vw] leading-[130%] sm:leading-[2.3vw] font-semibold uppercase">
                        Closures:
                    </h4>
                    <div className="flex gap-2 sm:gap-[0.2vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw]">
                        <span className="block font-bold">July 4th -</span>
                        <span>closed, processing resumes July 5th</span>
                    </div>
                    <div className="flex gap-2 sm:gap-[0.2vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mt-2 sm:mt-[0.4vw]">
                        <span className="block font-bold">September 5th -</span>
                        <span>closed, processing resumes September 6th</span>
                    </div>
                    <div className="flex gap-2 sm:gap-[0.2vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mt-2 sm:mt-[0.4vw]">
                        <span className="block font-bold">
                            September 16th -
                        </span>
                        <span>
                            shipping paused, processing resumes September 19th.
                            Offices are still open.
                        </span>
                    </div>
                    <div className="flex gap-2 sm:gap-[0.2vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mt-2 sm:mt-[0.4vw]">
                        <span className="block font-bold">November 24th -</span>
                        <span>closed, processing resumes November 25th</span>
                    </div>
                    <div className="flex gap-2 sm:gap-[0.2vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mt-2 sm:mt-[0.4vw]">
                        <span className="block font-bold">
                            ‍December 26th -
                        </span>
                        <span>closed, processing resumes December 27th</span>
                    </div>
                </div>

                <div className="mt-[5vw]">
                    <h4 className="text-2xl sm:text-[1.7vw] leading-[130%] sm:leading-[2.3vw] font-semibold mb-5 sm:mb-[1vw] uppercase">
                        Shipping Promotion:
                    </h4>
                    <p className="text-lg sm:text-[1.2vw] leading-[144%] sm:leading-[2.3vw]">
                        Receive Free Shipping to all domestic contiguous states,
                        when your cart total after discounts is equal to or
                        greater than{" "}
                        <span className="inline-block font-bold">$49</span>. All
                        other states and US Territories, qualify for
                        Non-Contiguous rates.
                    </p>
                </div>

                <div className="flex flex-col gap-[0.2vw] mt-[5vw]">
                    <h4 className="text-2xl sm:text-[1.7vw] leading-[130%] sm:leading-[2.3vw] font-semibold mb-5 sm:mb-[1vw] uppercase">
                        INTERNATIONAL SHIPPING RATES
                    </h4>
                    <div className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw]">
                        <span>
                            For orders shipping outside of North America, please{" "}
                            <a className="underline text-blue-700" href="">
                                contact us via our contact form
                            </a>
                            . A member of our team will reach out within 1-2
                            business days.
                        </span>
                        <span className="flex mt-5 sm:mt-[1vw]">
                            Questions? Contact us{" "}
                            <a
                                className="underline text-blue-700 ml-1 sm:ml-[0.2vw]"
                                href=""
                            >
                                info@tea-flow.com
                            </a>
                            .
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-[14vw]">
                <Discount />
            </div>
        </>
    );
};

export default Delivery;
