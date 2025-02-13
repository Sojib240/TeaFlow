import React from "react";

const Marqueeee = ({text}) => {
    return (
        <div className="overflow-hidden">
            <span className="block text-[14vw] uppercase font-bold whitespace-nowrap leading-[12.5vw]">
                {text}
            </span>
        </div>
    );
};

export default Marqueeee;
