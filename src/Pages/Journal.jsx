import React, { useContext, useEffect, useState } from "react";
import Title from "../Common/Title";
import Discount from "../Common/Discount";
import { journalsContext } from "../Utils/JournalContext";
import { Link } from "react-router-dom";

const Journal = () => {
    document.title = "TeaFlow － Journal";
    const [journalApiData, setjournalApiData] = useContext(journalsContext);

    return (
        <>
            <Title text={"Journal"} />
            <div className="px-5 sm:px-[5.15vw] mx-auto mt-20 sm:mt-[8vw] font-GolosRegular">
                {journalApiData.journals &&
                    journalApiData.journals.map(
                        ({ date, id, mainImgSrc, title }) => {
                            return (
                                <>
                                    <Link
                                        key={id}
                                        to={`/singleJournal/${id}`}
                                        className={`w-full ${
                                            id === 8 && "border-b"
                                        } flex flex-col gap-5 sm:gap-[8vw] sm:flex-row justify-between items-start sm:items-start border-t border-[#DEDADA] py-5 sm:py-[2vw]`}
                                    >
                                        <div className="w-full sm:w-[72%] flex flex-col justify-between h-full">
                                            <div className="mb-5 sm:mb-0">
                                                <h4 className="block sm:hidden text-lg">
                                                    {date}
                                                </h4>
                                                <h4 className="text-2xl sm:text-[3.5vw] uppercase mb-3 sm:mb-[1vw] font-semibold">
                                                    {title}
                                                </h4>
                                                <h4 className="hidden sm:block w-full sm:w-[16%] text-[1.2vw]">
                                                    {date}
                                                </h4>
                                                <button className="cursor-pointer hidden sm:block text-base sm:text-[0.9vw] border-b mt-[10.5vw]">
                                                    Read article
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-[28%] overflow-hidden rounded-4xl sm:rounded-[3.5vw] mb-8 sm:mb-0  sm:h-[20vw] aspect-auto">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={mainImgSrc}
                                                alt=""
                                            />
                                        </div>
                                        <button className="block sm:hidden text-base sm:text-[0.9vw] border-b">
                                            Read article
                                        </button>
                                    </Link>
                                </>
                            );
                        }
                    )}
            </div>
            <div className="mt-[18vw]">
                <Discount />
            </div>
        </>
    );
};

export default Journal;
