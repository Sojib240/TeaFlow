import React from "react";

const Title = ({ text }) => {
    return (
        <div className="px-5 sm:px-[5.15vw] mx-auto">
            <h2 className="text-5xl sm:text-[8vw] font-bold uppercase leading-[100%] mt-16 sm:mt-[7vw] text-black">
                {text}
            </h2>
        </div>
    );
};

export default Title;
