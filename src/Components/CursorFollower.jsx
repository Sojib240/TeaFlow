
import gsap from "gsap";
import React, { useEffect } from "react";

const CursorFollower = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            gsap.to("#mouse", {
                x: clientX,
                y: clientY,
            });
        };

        Window.addEventListener("mousemove", handleMouseMove);
        return () => {
            Window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div id="mouse" className="border w-5 h-5 fixed top-0 left-0 z-[999]" />
    );
};

export default CursorFollower;
