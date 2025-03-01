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
            <div className="px-5 pt-24 sm:pl-[14vw] sm:pt-[28vw] sm:pr-[3vw] flex justify-between flex-col sm:flex-row items-start gap-10 sm:gap-[1vw] w-full">
                <div className="overflow-hidden h-auto w-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="uppercase text-4xl sm:text-[7vw] text-white w-[65%] sm:leading-none font-GolosRegular"
                    >
                        philosophy
                    </motion.h2>
                </div>
                <div className="sm:w-[44%] sm:bg-[#0d343a] sm:rounded-[3vw] p-0 sm:p-[4vw] font-GolosRegular text-lg sm:text-[1.2vw] leading-[10vw] sm:leading-[2.5vw] text-white ">
                    {`Let’s make the world cleaner together.
                        At Tea Flow, we believe it's our responsibility to
                        make the world cleaner and healthier for
                        everyone. That's why we're proud to introduce
                        our newest initiative - every time you buy our
                        premium tea, you help clean the ocean of plastic!`
                        .split("\n")
                        .map((text, index) => (
                            <div
                                key={index}
                                className="overflow-hidden h-auto w-auto"
                            >
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: "100%",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.015 * index,
                                    }}
                                >
                                    {text}
                                </motion.p>
                            </div>
                        ))}
                    <div className="pt-8 sm:pt-[1.3vw]">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center gap-2 sm:gap-[1vw]"
                        >
                            <Link
                                to={"/aboutUs"}
                                className="border-b border-dashed border-[#DEDADA] inline-block sm:text-[1vw] text-[#DEDADA] sm:text-[#DEDADA] leading-[1.4vw]"
                            >
                                about us
                            </Link>
                            <span className="sm:text-[1vw] text-[#DEDADA] leading-none block">
                                <CiShare1 />
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
