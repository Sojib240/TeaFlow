import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../Utils/Context";
import { useParams } from "react-router-dom";

const SingleJournal = () => {
    const [productsApiData] = useContext(productContext);

    const { id } = useParams();
    const [singleJournal, setsingleJournal] = useState();
    let journalPageTitle;

    const singleJournalId = () => {
        const journal = productsApiData.journals[id - 1];
        setsingleJournal(journal);
        journalPageTitle = document.title = `TEAFLOW － ${journal.title}`;
    };
    useEffect(() => {
        singleJournalId();
    }, []);

    return (
        <div className="sm:pl-[5.15vw] px-5 sm:pr-[20vw] mt-12 sm:mt-[6vw] font-GolosRegular">
            {singleJournal && (
                <>
                    <div className="px-0 text-[#9C9797] font-GolosRegular text-[13px] sm:text-[1vw] sm:flex gap-5 sm:gap-[1vw] capitalize mt-0 sm:mt-[-3.5vw] pb-[3vw] hidden ">
                        <span>Home</span>
                        <span>/</span>
                        <span>journal</span>
                        <span>/</span>
                        <span>{singleJournal.title.slice(0, 12) + "...."}</span>
                    </div>
                    <h2 className="text-3xl sm:text-[3.6vw] uppercase font-GolosDemiBold pb-7 sm:pb-[2vw] border-b border-[#DEDADA] pr-[24vw]">
                        {singleJournal.title && singleJournal.title}
                    </h2>
                    <div className="mt-8 sm:mt-[2vw]">
                        <div className="text-xl sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-[3.8vw]">
                            <p className="capitalize">Paul White</p>
                            <p>{singleJournal.date && singleJournal.date}</p>
                        </div>
                        <div
                            className="pl-0 flex flex-col gap-5 sm:gap-[2vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] p-0 sm:pl-[10vw] mt-8 sm:mt-[4vw] journal-content"
                            dangerouslySetInnerHTML={{
                                __html: singleJournal.pageContent,
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default SingleJournal;
