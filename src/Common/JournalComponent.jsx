import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../Utils/Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const JournalComponent = () => {
    const [productsApiData] = useContext(productContext);
    const [journalNewData, setjournalNewData] = useState([]);
    const journalDataReducing = () => {
        const slicedData =
            productsApiData.journals && productsApiData.journals.slice(0, 5);
        setjournalNewData(slicedData);
    };
    useEffect(() => {
        journalDataReducing();
    }, [productsApiData]);
    //

    return (
        <div className="px-5 sm:px-[14.44vw] pt-16 sm:pt-[16vw] pb-0  sm:pb-0">
            <div className="flex w-full justify-between items-center mb-10 sm:mb-[10vw] flex-wrap gap-y-5 gap-x-10 sm:gap-[3vw]">
                <div className="overflow-hidden w-auto h-auto ">
                    <motion.h2
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-[3.5vw] uppercase font-GolosRegular font-semibold"
                    >
                        Journal
                    </motion.h2>
                </div>
                <Link
                    to={"/journal"}
                    className="overflow-hidden w-auto h-auto block"
                >
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sm sm:text-[1vw] flex gap-2 sm:gap-[0.4vw] font-GolosRegular"
                    >
                        <span className="block border-b border-dashed border-[#000]">Read all stories</span>
                        <span className="mt-[-0.5vw] block">8</span>
                    </motion.div>
                </Link>
            </div>
            {journalNewData &&
                journalNewData.map(({ date, title, id }, index) => {
                    return (
                        <Link to={`/singleJournal/${id}`} key={id}>
                            <div className="overflow-hidden w-auto h-auto border-b border-dashed border-[#DEDADA]">
                                <motion.div
                                    initial={{ opacity: 0, y: "100%" }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="font-GolosRegular py-5 sm:py-[1vw] mt-8 sm:mt-[4vw] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[8vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] group"
                                >
                                    <h4 className="text-sm">{date}</h4>
                                    <h4 className="text-xl sm:text-[1.2vw] group-hover:ml-[2vw] duration-500 transition-all">
                                        {title}
                                    </h4>
                                </motion.div>
                            </div>
                        </Link>
                    );
                })}
        </div>
    );
};

export default JournalComponent;
