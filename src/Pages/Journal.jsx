import React, { useContext, useEffect, useState } from "react";
import Title from "../Common/Title";
import Discount from "../Common/Discount";
import { journalsContext } from "../Utils/JournalContext";
import { Link } from "react-router-dom";

const Journal = () => {
    document.title = "JOURNAL － TEAFLOW";
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
                                        to={`/singleJournal/${id}`}
                                        key={id}
                                        className={`w-full ${
                                            id === 8 && "border-b"
                                        } flex flex-col gap-5 sm:gap-[2vw] sm:flex-row justify-between items-start sm:items-start border-t border-[#DEDADA] py-8 sm:py-[3vw]`}
                                    >
                                        <div className="w-full sm:w-[65%] flex flex-col justify-between h-full">
                                            <div className="mb-5 sm:mb-0">
                                                <h4 className="block sm:hidden text-lg">
                                                    {date}
                                                </h4>
                                                <h4 className="text-3xl sm:text-[3.8vw] uppercase font-GolosDemiBold mb-3 sm:mb-[1vw]">
                                                    {title}
                                                </h4>
                                                <h4 className="hidden sm:block w-full sm:w-[16%] text-[1.2vw]">
                                                    {date}
                                                </h4>
                                                <button className="hidden sm:block text-base sm:text-[0.9vw] border-b mt-[10.5vw]">
                                                    Read article
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-[35%] h-full overflow-hidden rounded-4xl sm:rounded-[3.5vw] mb-8 sm:mb-0">
                                            <img
                                                className="w-full h-full"
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
