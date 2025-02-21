import React from "react";

const SliderTitle = (SliderTitleData) => {
    return (
        SliderTitleData && (
            <div className="text-2xl sm:text-[6.6vw] uppercase font-GolosBold leading-[130%] sm:leading-[110%] whitespace-nowrap z-50 relative pt-5">
                {/* <span className="block pl-[9vw]">{SliderTitleData.title}</span>
                <span className="block">{SliderTitleData.title2}</span>
                <span>{SliderTitleData.title3}</span> */}
                <span className="block pl-0 sm:pl-[9vw]">Relax with</span>
                <span className="block">Rich Red</span>
                <span>Tea #3</span>
            </div>
        )
    );
};

export default SliderTitle;
