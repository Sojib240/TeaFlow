import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Title = ({ text }) => {
    const titelText = useRef();
    useGSAP(() => {
        gsap.from(titelText.current, {
            y: "8vw",
            opacity: 0,
        });
    }, []);
    return (
        <div className="px-5 sm:px-[5.15vw] mx-auto overflow-hidden mt-5 sm:mt-[2.6vw]">
            <h2
                ref={titelText}
                className="text-[52px] sm:text-[8vw] font-GolosBold uppercase leading-[100%] text-black"
            >
                {text}
            </h2>
        </div>
    );
};

export default Title;
