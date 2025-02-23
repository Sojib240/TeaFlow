import React from "react";

const Discount = () => {
    return (
        <div className="w-full rounded-4xl sm:rounded-[6vw] mx-auto bg-[#f7f7f7]">
            <div className="px-8 sm:px-[14.44vw] py-16 sm:py-[11vw] flex flex-col  items-center gap-10 sm:flex-row sm:items-end">
                <div className="w-full sm:w-[65%] text-left sm:text-left">
                    <h2 className="text-4xl sm:text-[3.5vw] uppercase font-GolosDemiBold">
                        Get 20% off
                    </h2>
                    <p className="text-base sm:text-[1.2vw] pt-[4vw] leading-[30px] sm:leading-[2vw] font-GolosRegular">
                        Your first order + future sales updates. <br />
                        You can safely unsubscribe anytime from any email <br />
                        footer. Here is our{" "}
                        <a className="border-b border-[#ded9d9] pb-1" href="#">
                            privacy policy
                        </a>
                    </p>
                </div>
                <div className="w-full sm:w-[35%] border-b border-[#ded9d9] flex justify-between pb-3 font-GolosRegular">
                    <input
                        className="w-[82%] sm:w-[83%] outline-none text-base sm:text-[1.3vw]"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <button className="w-[18%] sm:w-[17%] cursor-pointer">
                        <img
                            className="w-full"
                            src="/Images/Btn-icon.svg"
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discount;
