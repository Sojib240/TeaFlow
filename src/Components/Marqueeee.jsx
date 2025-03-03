import { motion } from "framer-motion";
import React from "react";

const Marqueeee = ({ text }) => {
    return (
        <div className="overflow-hidden h-auto w-auto">
            <motion.span
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once:true}}
                transition={{
                    duration: 0.5,
                }}
                className="block text-[16vw] sm:text-[14vw] uppercase font-GolosBold whitespace-nowrap leading-[16.5vw] sm:leading-[12.5vw]"
            >
                {text}
            </motion.span>
        </div>
    );
};

export default Marqueeee;
