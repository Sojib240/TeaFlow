import React from "react";
import { Link } from "react-router-dom";

const TopSales = () => {
    return (
        <div className="px-5 sm:px-[5.15vw] mx-auto w-full">
            <div className="">
                <h2 className="text-[13.2vw] font-bold text-center">TOP SALES</h2>
                <div className="flex flex-col sm:flex-row gap-[5vw] my-[5vw]">
                    <div className="rounded-[4vw] overflow-hidden w-full sm:w-[60%]">
                        <img className="w-full"
                            src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806669_featured-p-1080.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="w-full sm:w-[40%] flex flex-col justify-between pt-[6vw] pb-[3vw]">
                        <div className="">
                        <h4 className="text-2xl sm:text-[2vw] uppercase font-semibold mb-5 sm:mb-[1vw]">Green tea #2</h4>
                        <h5 className="text-xl sm:text-[1.3vw]">$ 17</h5>
                        </div>
                        <div className="">
                        <p className="text-base sm:text-[1.1vw] mt-6 sm:mt-[1vw]">
                            Longjing is one of the ten "Famous Teas of China".
                            It is made of small tea leaves and buds, thanks to
                            which it is drunk for a long time, and has a bright
                            aroma and rich taste. In the manufacture of thin and
                            flat leaves are obtained.
                        </p>
                        <Link to={'/shop'} className="flex gap-2 sm:gap-[1vw] mt-6 sm:mt-[1.2vw] items-center cursor-pointer group">
                            <span className="text-[12px] sm:text-[0.9vw] font-semibold uppercase tracking-[0.2vw]">Shop now</span>
                            <span className="block w-10 sm:w-[4vw] group-hover:translate-x-[1.2vw] transition-all duration-300"><img className="w-full" src="/Images/Btn-icon.svg" alt="" /></span>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSales;
