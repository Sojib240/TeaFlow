import { motion } from "framer-motion";
import React from "react";
import { CiShare1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Philosophy = () => {
    //
    // gsap.registerPlugin(ScrollTrigger);
    // useGSAP(() => {
    //     const boxes = gsap.utils.toArray(".box");

    //     gsap.from(box, {
    //         opacity: 0,
    //         y: 50,
    //         duration: 1,
    //         scrollTrigger: {
    //             trigger: box,
    //             start: "top 80%",
    //             toggleActions: "play none none reverse",
    //             markers: true, // Optional, for debugging
    //         },
    //     });
    // }, []);
    //
    return (
        <div className="w-full philosophy flex items-end pb-24 sm:pb-[10vw] ">
            <div className="px-5 pt-24 sm:pl-[14.44vw] sm:pt-[28vw] sm:pr-[3vw] flex justify-between flex-col sm:flex-row items-start gap-10 sm:gap-0 w-full">
                <motion.h2 initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}} className="uppercase text-4xl sm:text-[7vw] text-white w-[65%] sm:leading-none font-GolosRegular">
                    philosophy
                </motion.h2>
                <div className="sm:w-[48%] sm:bg-[#0d343a] sm:rounded-[3vw] p-0 sm:p-[4vw] font-GolosRegular text-lg sm:text-[1.2vw] leading-[10vw] sm:leading-[2.5vw] text-white ">
                    <div className="">
                        <motion.p initial={{ opacity: 0, scale:0,transformOrigin:'left' }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}>Let’s make the world cleaner together.</motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p initial={{ opacity: 0, scale:0,transformOrigin:'left' }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}>
                            At Tea Flow, we believe it's our responsibility to
                        </motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p initial={{ opacity: 0, scale:0,transformOrigin:'left' }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}>make the world cleaner and healthier for</motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p initial={{ opacity: 0, scale:0,transformOrigin:'left' }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}>everyone. That's why we're proud to introduce</motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p initial={{ opacity: 0, scale:0,transformOrigin:'left' }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}>our newest initiative - every time you buy our</motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p initial={{ opacity: 1, scale:0,transformOrigin:'left' }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5}}>premium tea, you help clean the ocean of plastic!</motion.p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-[1vw] pt-8 sm:pt-[1.3vw] ">
                        <Link
                            to={"/aboutUs"}
                            className="border-b border-zinc-300 sm:border-zinc-400 inline-block sm:text-[1vw] text-zinc-300 sm:text-zinc-400"
                        >
                            about us
                        </Link>
                        <span className="sm:text-[1vw] text-zinc-300 leading-none">
                            <CiShare1 />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
