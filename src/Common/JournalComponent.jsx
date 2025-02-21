import React, { useContext, useEffect } from "react";
import { journalsContext } from "../Utils/JournalContext";
import { Link } from "react-router-dom";

const JournalComponent = () => {
    const [journalApiData, setjournalApiData] = useContext(journalsContext);

    return (
        <div className="px-5 sm:px-[14.44vw] pt-34 sm:pt-[15vw] pb-6  sm:pb-0">
            <div className="flex w-full justify-between items-center mb-16 sm:mb-[10vw]">
                <h2 className="text-[33px] sm:text-[4vw] uppercase font-GolosDemiBold">
                    Journal
                </h2>
                <Link
                    to={"/journal"}
                    className="text-base sm:text-[1vw] flex gap-2 sm:gap-[0.4vw] border-b font-GolosRegular"
                >
                    Read all stories{" "}
                    <span className="mt-[-0.5vw] block">8</span>
                </Link>
            </div>
            {journalApiData.journals &&
                journalApiData.journals.map(({ date, title, id }) => {
                    return (
                        <Link to={`/singleJournal/${id}`} key={id}>
                            <div className="font-GolosRegular border-b border-[#DEDADA] py-5 sm:py-[1vw] mb-8 sm:mb-[4vw] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[8vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw]">
                                <h4 className="">{date}</h4>
                                <h4 className="text-2xl sm:text-[1.2vw]">
                                    {title}
                                </h4>
                            </div>
                        </Link>
                    );
                })}
        </div>
    );
};

export default JournalComponent;
