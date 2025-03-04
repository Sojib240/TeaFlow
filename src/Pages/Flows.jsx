import React, { useContext } from "react";
import Title from "../Common/Title";
import { Link } from "react-router-dom";
import Philosophy from "../Common/Philosophy";
import JournalComponent from "../Common/JournalComponent";
import Discount from "../Common/Discount";
import FollowUs from "../Common/FollowUs";
import { productContext } from "../Utils/Context";
import { motion } from "framer-motion";

const Flows = ({ handleFlowsCategoriesFilter }) => {
    const [productsApiData] = useContext(productContext);
    document.title = "TeaFlow － Flows";
    return (
        <>
            <Title text={"choose your flow"} />
            <div className="px-5 sm:px-[14.44vw] mx-auto mt-16 sm:mt-7vw] font-GolosRegular">
                <div className="flex flex-wrap gap-[6px] sm:gap-[0.4vw] pr-0 sm:pr-[20vw]">
                    {"Welcome to Choose Your Flow, where we offer a selection of teas to cater to your needs and help you find your ideal state of mind. Whether you're seeking to unwind and relax, promote wellness and balance, reconnect with yourself, or boost your energy, we've got you covered."
                        .split(" ")
                        .map((text, index) => (
                            <div className="overflow-hidden h-auto w-auto text-lg sm:text-[1.2vw] leading-[144%] sm:leading-[2.3vw]">
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: "100%",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{once:true}}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.01 * index,
                                    }}
                                >
                                    {text}
                                </motion.p>
                            </div>
                        ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-[3vw] mt-8 sm:mt-[5vw]">
                    {productsApiData.flows &&
                        productsApiData.flows.map(
                            ({ id, flowTitle, image, desc, slug }, index) => {
                                return (
                                    <Link
                                        key={id}
                                        to={`/catagory/${slug}`}
                                        className="col-span-1 group"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 150 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{once:true}}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.1 * index,
                                            }}
                                            className=""
                                        >
                                            <div
                                                className={`card-image overflow-hidden max-h-[75vw] sm:max-h-[29.51vw] h-full`}
                                            >
                                                <Link
                                                    to={`/catagory/${slug}`}
                                                >
                                                    <img
                                                        className="group-hover:scale-125 duration-1200 transition-all h-full w-full object-cover"
                                                        src={image}
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <h4 className="text-xl sm:text-[2.4vw] md:text-[3vw] mt-4 sm:mt-[1vw] font-GolosDemiBold text-[#222020] uppercase">
                                                {flowTitle}
                                            </h4>
                                            <p className="text-base font-GolosRegular sm:text-[2.2vw] md:text-[1.2vw] text-[#979191] mt-2 sm:mt-[1vw]">
                                                {desc}
                                            </p>
                                        </motion.div>
                                    </Link>
                                );
                            }
                        )}
                </div>
            </div>
            <div className="mt-16 sm:mt-[12vw]">
                <Philosophy />
            </div>
            <div className="mt-0 mb-[12vw]">
                <JournalComponent />
            </div>
            <div className="">
                <Discount />
            </div>
            <div className="mt-[18vw]">
                <FollowUs />
            </div>
        </>
    );
};

export default Flows;
