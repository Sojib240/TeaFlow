import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../Utils/Context";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const SingleJournal = () => {
    const [productsApiData] = useContext(productContext);
    const { param } = useParams();
    // const { id } = useParams();
    const [singleJournal, setsingleJournal] = useState();
    let journalPageTitle;

    const singleJournalparam = () => {
        const journal =
            productsApiData.journals &&
            productsApiData.journals.filter((jour) => {
                return jour.param === param;
            });
        console.log(journal);
        setsingleJournal(journal);
        journal.map((j) => {
            journalPageTitle = document.title = `${j.title}`;
        });
    };
    useEffect(() => {
        if (productsApiData.journals) {
            singleJournalparam();
        }
    }, [productsApiData.journals]);

    return (
        <div className="sm:pl-[5.15vw] px-5 sm:pr-[20vw] mt-6 sm:mt-[2vw] font-GolosRegular">
            {singleJournal &&
                singleJournal.map((singJour) => {
                    return (
                        <div key={singJour.id}>
                            <div className="overflow-hidden w-auto h-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: "100%" }}
                                    viewport={{ once: true }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="text-[#9C9797] font-GolosRegular text-[13px] sm:text-[1vw] sm:flex gap-5 sm:gap-[1.5vw] capitalize hidden"
                                >
                                    <span className="block">Home</span>
                                    <span className="block">/</span>
                                    <span className="block">journal</span>
                                    <span className="block">/</span>
                                    <span className="block">
                                        {singJour.title.slice(0, 12) + "...."}
                                    </span>
                                </motion.div>
                            </div>
                            <div className="flex flex-wrap gap-[6px] sm:gap-[0.4vw] pb-7 sm:pb-[2vw] pr-0 sm:pr-[24vw] w-full border-b border-[#DEDADA] border-dashed mt-[3vw]">
                                {singJour.title &&
                                    singJour.title.split(" ").map((tex) => {
                                        return (
                                            <div className="overflow-hidden w-auto h-auto ">
                                                <motion.p
                                                    initial={{
                                                        opacity: 0,
                                                        y: "100%",
                                                    }}
                                                    viewport={{ once: true }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                    }}
                                                    className="text-3xl sm:text-[3.6vw] uppercase font-GolosDemiBold"
                                                >
                                                    {tex}
                                                </motion.p>
                                            </div>
                                        );
                                    })}
                            </div>

                            <div className="mt-8 sm:mt-[2vw]">
                                <div className="text-base sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-[3.8vw]">
                                    <div className="overflow-hidden w-auto h-auto">
                                        <motion.p
                                            initial={{ opacity: 0, y: "100%" }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            className="capitalize"
                                        >
                                            Paul White
                                        </motion.p>
                                    </div>
                                    <div className="overflow-hidden w-auto h-auto">
                                        <motion.p
                                            initial={{ opacity: 0, y: "100%" }}
                                            viewport={{ once: true }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                            }}
                                        >
                                            {singJour.date && singJour.date}
                                        </motion.p>
                                    </div>
                                </div>
                                <div
                                    className="pl-0 flex flex-col gap-5 sm:gap-[2vw] text-base sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] p-0 sm:pl-[10vw] mt-8 sm:mt-[4vw] journal-content"
                                    dangerouslySetInnerHTML={{
                                        __html: singJour.pageContent,
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default SingleJournal;
