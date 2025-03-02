import React, { useContext } from "react";
import Title from "../Common/Title";
import Discount from "../Common/Discount";
import { Link } from "react-router-dom";
import { productContext } from "../Utils/Context";
import { motion } from "framer-motion";

const Journal = () => {
    document.title = "TeaFlow － Journal";
    const [productsApiData] = useContext(productContext);
    return (
        <div className="pt-12 sm:pt-[5vw]">
            <Title text={"Journal"} />
            <div className="px-5 sm:px-[5.15vw] mx-auto mt-20 sm:mt-[8vw] font-GolosRegular">
                {productsApiData.journals &&
                    productsApiData.journals.map(
                        ({ date, id, mainImgSrc, title }) => {
                            return (
                                <div key={id}>
                                    <Link
                                        className="border-t border-dashed border-[#DEDADA] block overflow-hidden w-auto h-auto"
                                        to={`/single-journal/${id}`}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.01 * id,
                                            }}
                                            className={`w-full ${
                                                id === 8 &&
                                                "border-b border-dashed border-[#DEDADA]"
                                            } flex flex-col gap-5 sm:gap-[8vw] sm:flex-row justify-between items-start sm:items-center py-5 sm:py-[2vw]`}
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
                                            {/* <button className="block sm:hidden text-base sm:text-[0.9vw]">
                                                Read article
                                            </button> */}
                                        </motion.div>
                                    </Link>
                                </div>
                            );
                        }
                    )}
            </div>
            <div className="mt-[18vw]">
                <Discount />
            </div>
        </div>
    );
};

export default Journal;
