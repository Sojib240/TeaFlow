import React from "react";
import { motion } from "framer-motion";

const Title = ({ text }) => {
    return (
        <div className="px-5 sm:px-[5.15vw] mx-auto overflow-hidden w-auto h-auto mt-5 sm:mt-[2.6vw] flex flex-wrap gap-3 sm:gap-[2vw]">
            {text.split(" ").map((text,index) => (
                <motion.p key={index}
                    className="text-[48px] sm:text-[8vw] font-GolosBold uppercase leading-[100%]"
                    initial={{
                        opacity: 0,
                        y: "100%",
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                >
                    {text}
                </motion.p>
            ))}
        </div>
    );
};

export default Title;
