import React from "react";
import { CiShare1 } from "react-icons/ci";
import { Link } from "react-router-dom";


const Philosophy = () => {
    return (
        <div className="w-full philosophy flex items-end pb-28 sm:pb-[8vw] ">
            <div className="px-5 pt-52 sm:pl-[14.44vw] sm:pt-[28vw] sm:pr-[5vw] flex flex-col sm:flex-row items-start gap-10 sm:gap-0">
                <h2 className="uppercase text-[53px] sm:text-[7.6vw] text-white w-[65%] sm:leading-none">
                    philosophy
                </h2>
                <div className="sm:w-[45%] sm:bg-[#0d343a] sm:rounded-[3vw] p-0 sm:p-[5vw]">
                    <h2 className="text-[20px] sm:text-[1.2vw] sm:leading-[2.2vw] text-white">
                        Let’s make the world cleaner together. At Tea Flow, we
                        believe it's our responsibility to make the world
                        cleaner and healthier for everyone. That's why we're
                        proud to introduce our newest initiative - every time
                        you buy our premium tea, you help clean the ocean of
                        plastic!
                    </h2>
                    <div className="flex items-center gap-[1vw] pt-8 sm:pt-[1.3vw] ">
                    <Link to={'/aboutUs'} className="border-b border-zinc-300 sm:border-zinc-400 inline-block sm:text-[1vw] text-zinc-300 sm:text-zinc-400">about us</Link>
                    <span className="sm:text-[1vw] text-zinc-400 leading-none"><CiShare1 />
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
