import React from "react";

const FollowUs = () => {
    return (
        <div className="pl-5 sm:pl-[14.44vw] w-full">
            <h2 className="uppercase text-4xl sm:text-[8vw] pb-[6vw] font-bold">
                Follow us
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1.2vw] w-full">
                <div className="rounded-[4vw] overflow-hidden group relative flex col-span-1">
                    <img
                        className="w-full"
                        src="/Images/follow-us-1.jpg"
                        alt=""
                    />
                    <a
                        href="https://www.instagram.com/accounts/login/?next=%2Ftea_flow_usa%2F&source=omni_redirect"
                        target="blank"
                        className="w-full h-full bg-black opacity-0 absolute top-0 left-0 group-hover:opacity-100 duration-300 transition-all text-white flex justify-center items-center text-[1.5vw]"
                    >
                        @tea_flow
                    </a>
                </div>
                <div className="overflow-hidden group relative flex col-span-1">
                    <img
                        className="w-full"
                        src="/Images/follow-us-2.jpg"
                        alt=""
                    />
                    <a
                        href="https://www.instagram.com/accounts/login/?next=%2Ftea_flow_usa%2F&source=omni_redirect"
                        target="blank"
                        className="w-full h-full bg-black opacity-0 absolute top-0 left-0 group-hover:opacity-100 duration-300 transition-all text-white flex justify-center items-center text-[1.5vw]"
                    >
                        @tea_flow
                    </a>
                </div>{" "}
                <div className="overflow-hidden group relative flex col-span-1">
                    <img
                        className="w-full"
                        src="/Images/follow-us-3.jpg"
                        alt=""
                    />
                    <a
                        href="https://www.instagram.com/accounts/login/?next=%2Ftea_flow_usa%2F&source=omni_redirect"
                        target="blank"
                        className="w-full h-full bg-black opacity-0 absolute top-0 left-0 group-hover:opacity-100 duration-300 transition-all text-white flex justify-center items-center text-[1.5vw]"
                    >
                        @tea_flow
                    </a>
                </div>{" "}
                <div className=" overflow-hidden group relative flex col-span-1">
                    <img
                        className="w-full"
                        src="/Images/follow-us-4.jpg"
                        alt=""
                    />
                    <a
                        href="https://www.instagram.com/accounts/login/?next=%2Ftea_flow_usa%2F&source=omni_redirect"
                        target="blank"
                        className="w-full h-full bg-black opacity-0 absolute top-0 left-0 group-hover:opacity-100 duration-300 transition-all text-white flex justify-center items-center text-[1.5vw]"
                    >
                        @tea_flow
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FollowUs;
