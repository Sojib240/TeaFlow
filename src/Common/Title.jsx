import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Title = ({ text }) => {
    // for render the animation every time i click on category
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const handleAnimationTrigger = () => {
        setTriggerAnimation(!triggerAnimation);
    };
    useEffect(() => {
        handleAnimationTrigger();
    }, [text]);
    return (
        <div className="px-5 sm:px-[5.15vw] mx-auto overflow-hidden w-auto h-auto mt-5 sm:mt-[2.6vw] flex flex-wrap gap-3 sm:gap-[2vw]">
            {text
                .toString()
                .split(" ")
                .map((word, index) => (
                    <div key={index} className="overflow-hidden w-auto h-auto">
                        <motion.p
                            key={`${word}-${index}-${triggerAnimation}`}
                            className="text-[48px] sm:text-[8vw] font-GolosBold uppercase leading-[100%]"
                            initial={{
                                opacity: 0,
                                y: "100%",
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                        >
                            {word}
                        </motion.p>
                    </div>
                ))}
        </div>
    );
};

export default Title;
