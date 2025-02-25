import React from "react";
import Title from "../Common/Title";
import { Link } from "react-router-dom";
import { flowData } from "../Utils/AditionalData";
import Philosophy from "../Common/Philosophy";
import JournalComponent from "../Common/JournalComponent";
import Discount from "../Common/Discount";
import FollowUs from "../Common/FollowUs";

const Flow = () => {
    document.title = "TeaFlow － Flows";
    return (
        <>
            <Title text={"choose your flow"} />
            <div className="px-5 sm:px-[14.44vw] mx-auto mt-18 sm:mt-[9vw] font-GolosRegular">
                <h4 className="text-lg sm:text-[1.2vw] leading-[144%] sm:leading-[2.3vw] pr-0 sm:pr-[20vw]">
                    Welcome to Choose Your Flow, where we offer a selection of
                    teas to cater to your needs and help you find your ideal
                    state of mind. Whether you're seeking to unwind and relax,
                    promote wellness and balance, reconnect with yourself, or
                    boost your energy, we've got you covered.
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-[3vw] mt-8 sm:mt-[5vw]">
                    {flowData.map(({ id, title, image, desc }) => {
                        return (
                            <>
                                <Link key={id} className="col-span-1 group">
                                    <div className={`card-image overflow-hidden max-h-[75vw] sm:max-h-[29.51vw] h-full`}>
                                        <Link to={""}>
                                            <img
                                                className="group-hover:scale-125 duration-1200 transition-all h-full w-full object-cover"
                                                src={image}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <h4 className="text-xl sm:text-[2.4vw] md:text-[3vw] mt-4 sm:mt-[1vw] font-GolosDemiBold text-[#222020] uppercase">
                                        {title}
                                    </h4>
                                    <p className="text-base font-GolosRegular sm:text-[2.2vw] md:text-[1.2vw] text-[#979191] mt-2 sm:mt-[1vw]">
                                        {desc}
                                    </p>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className="mt-[15vw]">
                <Philosophy />
            </div>
            <div className="mb-[12vw]">
                <JournalComponent />
            </div>
            <div className="">
                <Discount />
            </div>
            <div className="mt-[18vw]">
                <FollowUs />
            </div>
        </>
    );
};

export default Flow;
