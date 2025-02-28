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
            <div className="flex w-full justify-between items-center mb-16 sm:mb-[10vw] flex-wrap gap-5 sm:gap-[2vw]">
                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-[3.5vw] uppercase font-GolosRegular font-semibold"
                >
                    Journal
                </motion.h2>
                <Link to={"/journal"}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm sm:text-[1vw] flex gap-2 sm:gap-[0.4vw]  font-GolosRegular"
                    >
                        <span className="block border-b">Read all stories</span>
                        <span className="mt-[-0.5vw] block">8</span>
                    </motion.div>
                </Link>
            </div>
            {journalNewData &&
                journalNewData.map(({ date, title, id }, index) => {
                    return (
                        <Link to={`/singleJournal/${id}`} key={id}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.05 * index,
                                }}
                                className="font-GolosRegular border-b border-[#DEDADA] py-5 sm:py-[1vw] mb-8 sm:mb-[4vw] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[8vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] group"
                            >
                                <h4 className="">{date}</h4>
                                <h4 className="text-2xl sm:text-[1.2vw] group-hover:ml-[2vw] duration-500 transition-all">
                                    {title}
                                </h4>
                            </motion.div>
                        </Link>
                    );
                })}
        </div>
    );
};

export default JournalComponent;
