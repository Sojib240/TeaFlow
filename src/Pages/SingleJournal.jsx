import React, { useContext, useEffect, useState } from "react";
import { journalsContext } from "../Utils/JournalContext";
import { useParams } from "react-router-dom";

const SingleJournal = () => {
    const [journalApiData, setjournalApiData] = useContext(journalsContext);
    const { id } = useParams();
    const [singleJournal, setsingleJournal] = useState();
    let journalPageTitle;

    const singleJournalId = () => {
        const journal = journalApiData.journals[id - 1];
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
                    <h2 className="text-3xl sm:text-[3.6vw] uppercase font-GolosDemiBold pb-7 sm:pb-[2vw] border-b border-[#DEDADA] pr-[24vw]">
                        {singleJournal.title && singleJournal.title}
                    </h2>
                    <div className="mt-8 sm:mt-[2vw]">
                        <div className="text-xl sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-[3.8vw]">
                            <p className="capitalize">Paul White</p>
                            <p>
                                {singleJournal.date && singleJournal.date}
                            </p>
                        </div>
                        <div
                            className="pl-[10.7vw] flex flex-col gap-[2vw] text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] p-0 sm:pl-[10vw] mt-8 sm:mt-[4vw] journal-content"
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
