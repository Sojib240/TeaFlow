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
        console.log(journal);
    };
    useEffect(() => {
        singleJournalId();
    }, []);

    return (
        <div className="sm:pl-[5.15vw] px-5 sm:pr-[20vw] mt-12 sm:mt-[6vw] font-GolosRegular">
            {singleJournal && (
                <>
                    <h2 className="text-3xl sm:text-[3.6vw] uppercase font-GolosDemiBold pb-7 sm:pb-[2vw] border-b border-[#DEDADA] pr-[24vw]">
                        {singleJournal.title}
                    </h2>
                    <div className="mt-8 sm:mt-[2vw]">
                        <div className="text-xl sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-[4.4vw]">
                            <h4 className="capitalize">Paul White</h4>
                            <h4 className="text-base sm:text-[0.9vw]">
                                {singleJournal.date}
                            </h4>
                        </div>
                        <div className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] p-0 sm:pl-[10vw] mt-8 sm:mt-[4vw]">
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Gaiwan is a traditional dish for brewing Chinese
                                tea. It consists of a bowl, a lid, and sometimes
                                a saucer. In addition to being able to make
                                extremely fast brewing, the gaiwan allows you to
                                control the temperature of the water and
                                effectively convey the aroma of the tea leaf.
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                The volume of the gaiwan varies from 80 to 300
                                ml.
                            </h4>
                            <div className="w-full mt-10 sm:mt-[3.5vw]">
                                <img
                                    className="rounded-[5vw] w-full"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806907_00.jpeg"
                                    alt=""
                                />
                                <h4 className="mb-5 sm:mb-[1vw] mt-8 sm:mt-[2vw] text-[#9499A2]">
                                    A rare specimen of gaiwan without a saucer.
                                </h4>
                            </div>
                            <h4 className="mb-5 sm:mb-[1vw] font-GolosBold">
                                History
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Gaiwan came into mass use in the XIV–XV
                                centuries. Initially, it consisted only of a cup
                                without a handle and lid. Over time, gaiwan
                                began to be made with a stand-saucer. Thus, I
                                was able to drink tea directly from the cup
                                while keeping it on weight.
                            </h4>
                            <h4 className="mb-10 sm:mb-[3.5vw]">
                                The reason for the mass use of gaywani was the
                                spread of leaf tea. Before that, the Chinese
                                mostly drank either pressed tea, which had to be
                                brewed, or powdered tea, which was dissolved.
                                With the evolving form of tea, there was also a
                                need for an additional convenient object for
                                brewing.
                            </h4>
                            <div className="w-full">
                                <img
                                    className="rounded-[5vw] w-full"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80690d_01.jpeg"
                                    alt=""
                                />
                            </div>
                            <h4 className="mt-10 mb-5 sm:mt-[3.5vw] sm:mb-[1vw] font-GolosBold">
                                Types of gaiwan
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Now you can find gaywan of different volumes,
                                with and without a saucer. In most cases, the
                                option with a saucer is more convenient: drops
                                of water during brewing will not stain the
                                table, it is more convenient to drink directly
                                from the gaiwan, and you can also brew tea
                                without using a Chaban (Tea Tray).
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                A large gaiwan with a volume of 300 ml. Suitable
                                for large companies.
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Gaiwan is handmade from Yixing clay. A stylish
                                design with a carved pommel and a universal
                                volume of 200 ml.
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                For one, a{" "}
                                <a className="underline text-blue-700" href="#">
                                    porcelain gaiwan is a baby
                                </a>
                                . A modest price for excellent quality.
                            </h4>
                            <div className="w-full mt-10 sm:mt-[3.5vw]">
                                <img
                                    className="rounded-[5vw] w-full"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec80690b_02.jpeg"
                                    alt=""
                                />
                                <h4 className="mb-5 sm:mb-[1vw] mt-8 sm:mt-[2vw] text-[#9499A2]">
                                    There is a difference in size, material, and
                                    design between gaiwan.
                                </h4>
                            </div>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                According to the material, gaywani are made of
                                porcelain, glass, and clay. The fragrance
                                remains on the lid wall of porcelain gaiwans for
                                a longer period of time. Glass gaiwans keep the
                                heat for less time and the tea cools faster, but
                                it allows you to admire the color of the
                                infusion. In gaiwan made of clay, tea cools down
                                more slowly, and the gaiwan itself eventually
                                develops, like the Yixing teapot.
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw] font-GolosBold">
                                Which is better: a gaiwan or a teapot?
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                For Chinese tea brewing, a gaiwan and a teapot
                                are the two main tools. Which one should I
                                choose?
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                We chose both. For some teas, a gaiwan is better
                                suited, while for others, a teapot is better
                                suited.
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                With a gaiwan, you can feel the aroma of tea
                                more vividly, and with a teapot, you can see a
                                richer taste. Therefore, super-fresh teas or
                                teas with a powerful aroma are traditionally
                                brewed in a gaiwan, and teas with a less
                                pronounced aroma are brewed in a teapot.
                                However, it all depends on what you want to get
                                from a particular tea party.
                            </h4>
                            <h4 className="mb-10 sm:mb-[3.5vw]">
                                At the same time, the harbor is considered a
                                more versatile item. This is because most of
                                them are made of porcelain or glass, which do
                                not absorb the aroma of tea when brewed.
                                Therefore, if you choose the first item for
                                brewing, we advise you to start with it.
                            </h4>
                            <div className="w-full mb-10 sm:mb-[3.5vw]">
                                <img
                                    className="rounded-[5vw] w-full"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806908_003.jpeg"
                                    alt=""
                                />
                            </div>
                            <h4 className="mb-5 sm:mb-[1vw] font-GolosBold">
                                Brew tea in a gaiwan
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                There are 2 ways to use a gaiwan for tea
                                drinking. You can use it as a kettle, or brew it
                                and drink it directly from the gaiwan.
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                If we want to drink the Fujian method,
                                repeatedly brewing tea
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Warm up the gaiwan with boiling water;
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Pour a dry leaf. With the lid closed, shake the
                                gaiwan and open the lid slightly to inhale the
                                aroma of a dry leaf;{" "}
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                We pour water into the gaiwan and wait for 3-7
                                seconds;
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Take the gaiwan by the upper rim of the bowl
                                with your thumb and middle finger, hold it with
                                your index finger, and slightly shift the lid;
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Pour the infusion into a Cha Hai (Gong Dao Bei)
                                or a cup;
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Repeat the brewing several times, gradually
                                increasing the infusion time.
                            </h4>
                            <div className="w-full mt-10 sm:mt-[3.5vw]">
                                <img
                                    className="rounded-[5vw] w-full"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068e4_04.jpeg"
                                    alt=""
                                />
                                <h4 className="mb-5 sm:mb-[1vw] mt-8 sm:mt-[2vw] text-[#9499A2]">
                                    Such brewing in gaiwan is called Fujian.
                                </h4>
                            </div>
                            <h4 className="mb-5 sm:mb-[1vw] font-GolosBold">
                                If we want to drink Sichuan method straight from
                                the cup
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Warm up the gaiwan with boiling water;
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                We pour a dry leaf (2-3 times less than we pour
                                with the usual tea drinking). With the lid
                                closed, shake the gaiwan and open the lid to
                                smell the aroma of dry leaves.{" "}
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                Pour boiling water into the gaiwan and wait for
                                2-3 minutes;
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                We take the gaiwan by the saucer with one hand,
                                and with the other we slightly shift the lid,
                                holding the tea leaves. You can drink directly
                                from the formed slit;
                            </h4>
                            <h4 className="mb-5 sm:mb-[1vw]">
                                And you can completely remove the lid if you are
                                not confused by the leaves that are trying to
                                swim away from the bottom.
                            </h4>
                            <div className="w-full mt-10 sm:mt-[3.5vw]">
                                <img
                                    className="rounded-[5vw] w-full"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec806904_05.jpeg"
                                    alt=""
                                />
                                <h4 className="mb-5 sm:mb-[1vw] mt-8 sm:mt-[2vw] text-[#9499A2]">
                                    Sichuan province often drinks straight from
                                    gaiwan.
                                </h4>
                            </div>
                            <h4 className="mt-10 sm:mt-[3.5vw]">
                                Gaiwan is convenient, practical, and versatile.
                            </h4>
                            <h4 className="mt-5 sm:mt-[1vw]">
                                Choose the gaiwan that suits you best, drink
                                delicious tea, and stay good people!
                            </h4>
                        </div>
                        {/* <div className="">
                            dangerouslySetInnerHTML=
                            {{ __html: singleJournal.pageContent }}
                        </div> */}
                    </div>
                </>
            )}
        </div>
    );
};

export default SingleJournal;
