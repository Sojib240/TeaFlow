import React from "react";

const Marqueeee = ({text}) => {
    return (
        <div className="overflow-hidden">
            <span className="block text-[16vw] sm:text-[14vw] uppercase font-GolosBold whitespace-nowrap leading-[16.5vw] sm:leading-[12.5vw]">
                {text}
            </span>
        </div>
    );
};

export default Marqueeee;
