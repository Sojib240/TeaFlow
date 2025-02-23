import React from "react";
import Discount from "../Common/Discount";
import Title from "../Common/Title";

const Returns = () => {
    document.title = "TeaFlow － Returns And Exchanges";
    return (
        <>
            <Title text={"returns and exchanges"} />
            <div className="px-5 sm:pl-[14.44vw] sm:pr-[32vw] mx-auto mt-16 sm:mt-[7vw] font-GolosRegular">
                <div className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw]">
                    <span>
                        P.B CORP is dedicated to sourcing only the highest
                        quality products and your experience is important to us.
                        If you feel the quality of our products is less than
                        expected, please contact our customer service within 30
                        days of your order date. We do not honor returns,
                        exchanges or refunds if the issue is a matter of
                        personal taste preference but do honor replacements or
                        website credit for quality issues. We reserve the right
                        to evaluate situations on a case by case basis as other
                        restrictions may apply.
                    </span>
                    <span className="block mt-5 sm:mt-[1.2vw]">
                        Please note, as an agricultural product, some seasonal
                        variance is to be expected in the flavor profiles of
                        tea. For this reason, we recommend purchasing smaller
                        quantities such as our "Teaser" sample size, ensuring
                        the tea is to your liking before committing to larger
                        bags.
                    </span>
                    <span className="block mt-5 sm:mt-[1.2vw]">
                        If you purchased your tea from a third party such as
                        Amazon or Whole Foods, please note we lack access to
                        your purchase history with these retailers, we kindly
                        ask you to contact the retailer at which you purchased
                        the items for the resolution of all product-related
                        issues. We apologize that we can't assist you directly
                        with these purchases.
                    </span>
                    <div className=" mt-5 sm:mt-[1.2vw]">
                        <span>
                            Email:{" "}
                            <a className="underline text-blue-700" href="">
                                info@tea-flow.com
                            </a>
                        </span>
                    </div>
                    <a
                        className="underline inline-block mt-5 sm:mt-[1vw] text-blue-700"
                        href=""
                    >
                        WhatsApp
                    </a>
                    <span className="block mt-5 sm:mt-[1vw]">
                        Monday - Friday: 9:00am to 5:00pm (CST)
                    </span>
                </div>
            </div>
            <div className="mt-[14vw]">
                <Discount />
            </div>
        </>
    );
};

export default Returns;
