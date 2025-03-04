import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SliderTitle = ({ SliderTitleData }) => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const handleAnimationTrigger = () => {
        setTriggerAnimation(!triggerAnimation);
    };
    useEffect(() => {
        handleAnimationTrigger();
    }, [SliderTitleData]);

    return (
        <div className="z-50 relative pt-3">
            {SliderTitleData.map(
                ({ id, title, title2, title3, desc, path }) => {
                    return (
                        <div key={id}>
                            <div className="text-[35px] sm:text-[6.6vw] uppercase font-GolosBold leading-[120%] sm:leading-[100%] whitespace-nowrap">
                                <div className="h-auto w-auto overflow-hidden">
                                    <motion.span
                                        key={
                                            triggerAnimation
                                                ? "trigger1"
                                                : "trigger2"
                                        }
                                        initial={{ opacity: 0, y: "100%" }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="block pl-0 sm:pl-[9vw]"
                                    >
                                        {title}
                                    </motion.span>
                                </div>
                                <div className="h-auto w-auto overflow-hidden">
                                    <motion.span
                                        key={
                                            triggerAnimation
                                                ? "trigger1"
                                                : "trigger2"
                                        }
                                        initial={{ opacity: 0, y: "100%" }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="block"
                                    >
                                        {title2}
                                    </motion.span>
                                </div>
                                <div className="h-auto w-auto overflow-hidden">
                                    <motion.span
                                        key={
                                            triggerAnimation
                                                ? "trigger1"
                                                : "trigger2"
                                        }
                                        initial={{ opacity: 0, y: "100%" }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="block"
                                    >
                                        {title3}
                                    </motion.span>
                                </div>
                            </div>
                            <div className="pr-[20vw] mt-[4vw]">
                                <div className="flex flex-wrap gap-[6px] sm:gap-[0.4vw]">
                                    {desc
                                        .toString()
                                        .split(" ")
                                        .map((tex, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="overflow-hidden h-auto w-auto"
                                                >
                                                    <motion.p
                                                        initial={{
                                                            opacity: 0,
                                                            y: "100%",
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.4,
                                                        }}
                                                        className="text-sm sm:text-[1.1vw] font-GolosRegular"
                                                    >
                                                        {tex}
                                                    </motion.p>
                                                </div>
                                            );
                                        })}
                                </div>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    className="inline-block mt-6 sm:mt-[2vw]"
                                >
                                    <Link
                                        to={`${path}`}
                                        className="flex gap-2 sm:gap-[1vw] items-center cursor-pointer group font-GolosRegular "
                                    >
                                        <span className="text-[12px] sm:text-[0.8vw] font-semibold uppercase tracking-[0.2vw]">
                                            Shop now
                                        </span>
                                        <span className="block w-10 sm:w-[3.6vw] group-hover:translate-x-[1.2vw] transition-all duration-300">
                                            <img
                                                className="w-full"
                                                src="/Images/Btn-icon.svg"
                                                alt=""
                                            />
                                        </span>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
};

export default SliderTitle;
