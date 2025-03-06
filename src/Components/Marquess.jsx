import React from "react";
import Marqueeee from "./Marqueeee";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marquess = () => {
    return (
        <div className="relative group">
            <Link
                to={`/catagory/${"products"}`}
                className="w-[12vw] background h-[12vw] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 rounded-[2.5vw] flex justify-center items-center text-[1vw] uppercase scale-0 opacity-0 lg:scale-0 group-hover:scale-0 group-hover:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-100 duration-500 transition-all font-GolosDemiBold tracking-[0.1vw]"
            >
                Watch shop
            </Link>
            <Marquee speed={120} direction="right" pauseOnClick>
                <Marqueeee text="oolong tea yellow tea red tea&#160;" />
            </Marquee>
            <Marquee speed={100} direction="left" pauseOnClick>
                <Marqueeee text="black tea green tea white tea&#160;" />
            </Marquee>
        </div>
    );
};

export default Marquess;
