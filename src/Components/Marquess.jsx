import React from "react";
import Marqueeee from "./Marqueeee";
import Marquee from "react-fast-marquee";

const Marquess = () => {
    return (
        <div>
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
