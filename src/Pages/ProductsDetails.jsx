import React, { useEffect, useState } from "react";
import Discount from "../Common/Discount";
import { Link } from "react-router-dom";

const ProductsDetails = () => {
    const [imageSlider, setimageSlider] = useState(
        "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg"
    );
    const handleSlider = (src) => {
        setimageSlider(src);
        // console.log(first);
    };
    return (
        <>
            <div className="px-5 sm:px-[5.15vw] w-full flex gap-[6vw] relative mt-[3vw]">
                <div className="w-full sm:w-[58%]">
                    <div className="flex gap-4 sm:gap-[0.6vw] flex-col sm:flex-row w-full">
                        <div className="order-2 sm:order-1 w-full sm:w-[22.85%] flex flex-row sm:flex-col gap-[0.6vw]">
                            <div className="">
                                <img
                                    onMouseEnter={() =>
                                        handleSlider(
                                            "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg"
                                        )
                                    }
                                    className="border border-[#ddd] w-full h-full object-cover"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <img
                                    onMouseEnter={() =>
                                        handleSlider(
                                            "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c8_%D0%94%D0%B0%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%20%D0%92%D0%B0%D0%BD%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%98%D0%B3%D0%BB%D1%8B%C2%BB%2C%202022%20%D0%B3-min.jpg"
                                        )
                                    }
                                    className="border border-[#ddd] w-full h-full object-cover"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068c8_%D0%94%D0%B0%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%20%D0%92%D0%B0%D0%BD%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%98%D0%B3%D0%BB%D1%8B%C2%BB%2C%202022%20%D0%B3-min.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <img
                                    onMouseEnter={() =>
                                        handleSlider(
                                            "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ca_%D0%94%D0%B0%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%20%D0%92%D0%B0%D0%BD%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%98%D0%B3%D0%BB%D1%8B%C2%BB%2C%202022%20%D0%B3(2)-min.jpg"
                                        )
                                    }
                                    className="border border-[#ddd] w-full h-full object-cover"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068ca_%D0%94%D0%B0%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%20%D0%92%D0%B0%D0%BD%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%98%D0%B3%D0%BB%D1%8B%C2%BB%2C%202022%20%D0%B3(2)-min.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <img
                                    onMouseEnter={() =>
                                        handleSlider(
                                            "https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d3_%D0%94%D0%B0%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%20%D0%92%D0%B0%D0%BD%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%98%D0%B3%D0%BB%D1%8B%C2%BB%2C%202022%20%D0%B3(3)-min.jpg"
                                        )
                                    }
                                    className="border border-[#ddd] w-full h-full object-cover"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8068d3_%D0%94%D0%B0%20%D0%A6%D0%B7%D0%B8%D0%BD%D1%8C%20%D0%A7%D0%B6%D1%8D%D0%BD%D1%8C%20%D0%92%D0%B0%D0%BD%20%C2%AB%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D0%B5%20%D0%98%D0%B3%D0%BB%D1%8B%C2%BB%2C%202022%20%D0%B3(3)-min.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="order-1 sm:order-2 w-full rounded-[5vw] sm:h-[37vw] overflow-hidden flex">
                            <img
                                className="object-cover flex w-full"
                                src={imageSlider}
                                alt=""
                            />
                        </div>
                    </div>
                    {/*  */}
                    <div className="w-full block sm:hidden mt-10 sm:mt-0">
                        <div className="">
                            <h2 className="text-4xl sm:text-[3.5vw] uppercase font-bold mb-4 sm:mb-[7vw]">
                                RED TEA #6
                            </h2>
                            <div className="text-lg sm:text-[1.2vw] leading-[144%] sm:leading-[2vw] flex flex-col">
                                Tasting notes:{" "}
                                <span>
                                    juicy, sweet and strong. Velvety,
                                    fruity-berry aftertaste. Impact: refreshes
                                    and warms, gives strength and energy.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-[2vw] mt-6 sm:mt-[3vw]">
                            <div className="flex items-center justify-between gap-[0.5vw] bg-[#222020] p-10 sm:p-[2.2vw] rounded-full sm:w-[70%]">
                                <div className="flex gap-3 sm:gap-[1vw]">
                                    <img
                                        className="w-4"
                                        src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806607_card-white.svg"
                                        alt=""
                                    />
                                    <h4 className="text-white text-lg sm:text-[1vw] font-medium">
                                        ADD TO CART
                                    </h4>
                                </div>
                                <p className="text-white text-base sm:text-[1vw] font-medium">
                                    $ 27
                                </p>
                            </div>
                            <h4 className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw] text-[#989292] flex items-center gap-[1vw] w-full sm:w-[30%] mt-3 mb-2 sm:my-0">
                                <img
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806603_in-stock.svg"
                                    alt=""
                                />{" "}
                                in stock
                            </h4>
                        </div>
                        <div className="flex items-start  gap-[1vw] mt-5 font-semibold">
                            <span className="block w-5 mt-1">
                                <img
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806639_hand-notification.svg"
                                    alt=""
                                />
                            </span>{" "}
                            <h4 className="text-base sm:text-[1vw] leading-[144%] sm:leading-[2vw]">
                                Every time you buy our premium tea, you help
                                clean the ocean of plastic!
                            </h4>
                        </div>
                    </div>
                    {/*  */}
                    <div className="mt-36 sm:mt-[5vw]">
                        <div className="">
                            <h4 className="text-xl sm:text-[1.4vw] leading-[144%] sm:leading-[2vw] font-bold mb-[1vw]">
                                About product
                            </h4>
                            <p className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw] mb-[4vw]">
                                Made in early spring from selected, large tea
                                buds, densely covered with the golden-orange
                                pile. The name translates as "Royal Big Golden
                                Needles" (Chinese: 大金王王). The rich taste and
                                bright aroma of Golden Needles have been
                                achieved thanks to the highest quality class of
                                the selected raw materials, the characteristics
                                of the Jingu Da Bai Cha cultivar, and the
                                terroir richness of the collection sites.
                                Separately, we note the author's tea processing
                                technology: the final drying process is carried
                                out at a low temperature in order to maximize
                                and fix the aroma of the tea leaf. Aroma: bright
                                and rich, berry, smoky, and strawberry. Taste:
                                juicy, sweet, and strong. Velvety, fruity-berry
                                aftertaste. Effect: refreshes and warms, gives
                                strength and energy. Harvest: First spring (most
                                valuable), end of February 2022, Jingu Region,
                                Pu'er County, Yunnan Province, China.
                            </p>
                        </div>
                        <div className="mb-[4vw]">
                            <h4 className="text-xl sm:text-[1.4vw] leading-[144%] sm:leading-[2vw] font-bold mb-[1vw]">
                                Steeping Instructions
                            </h4>
                            <p className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw]">
                                Traditional Preparation Add 7-10 grams to
                                a Gaiwan or Gongfu Teapot (150ml-200ml). Use
                                212°F boiling water. Briefly rinse the leaves.
                                Decant and discard this infusion. Infuse the
                                first brew for 10 seconds. Infuse 2nd and
                                subsequent brews for 10-30 seconds. Repeat
                                several times until the flavor and aroma of the
                                tea dissipates. As the brewing session ensues,
                                increase infusion time to coax out the body and
                                strength of the final infusions.
                            </p>
                        </div>
                        <div className="">
                            <h4 className="text-xl sm:text-[1.4vw] leading-[144%] sm:leading-[2vw] font-bold mb-[1vw]">
                                Ingredients
                            </h4>
                            <p className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw]">
                                Organic red tea
                            </p>
                        </div>
                    </div>
                    <div className="rounded-[5vw] mt-[5vw] bg-[#F7F7F7] px-[7vw] py-[4.5vw] flex flex-col gap-4 sm:gap-[1vw] text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw]">
                        <div className="flex gap-4 sm:gap-[1vw] items-center ">
                            <img
                                className="w-6 sm:w-[1.8vw]"
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806633_%20icon-credit%20card%20payment-1.svg"
                                alt=""
                            />
                            secure credit card payment
                        </div>
                        <div className="flex gap-4 sm:gap-[1vw] items-center">
                            <img
                                className="w-5 sm:w-[1.6vw]"
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806619_icon-free-delivery.svg"
                                alt=""
                            />
                            free delivery from $49
                        </div>
                        <div className="flex gap-4 sm:gap-[1vw] items-center">
                            <img
                                className="w-6 sm:w-[1.8vw]"
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806615_icon-free-returns.svg"
                                alt=""
                            />
                            making the world cleaner
                        </div>
                        <div className="flex gap-4 sm:gap-[1vw] items-start sm:items-center">
                            <img
                                className="w-6 sm:w-[1.8vw]"
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806604_icon-any-question.svg"
                                alt=""
                            />
                            <div className="">
                                do you have a question? write us on{" "}
                                <a className="underline" href="">
                                    whatsapp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[42%] hidden sm:block sticky top-0 right-0">
                    <div className="">
                        <h2 className="text-[3.5vw] uppercase font-bold mb-[7vw]">
                            RED TEA #6
                        </h2>
                        <div className="text-lg sm:text-[1.2vw] leading-[144%] sm:leading-[2vw] flex flex-col">
                            Tasting notes:{" "}
                            <span>
                                juicy, sweet and strong. Velvety, fruity-berry
                                aftertaste. Impact: refreshes and warms, gives
                                strength and energy.
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[2vw] mt-[3vw]">
                        <Link className="flex items-center justify-between gap-[0.5vw] bg-[#222020] p-[2.2vw] rounded-full w-[70%]">
                            <div className="flex items-center gap-[1vw]">
                                <img
                                    className="w-[1vw]"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806607_card-white.svg"
                                    alt=""
                                />
                                <h4 className="text-white text-lg sm:text-[1vw] font-medium">
                                    ADD TO CART
                                </h4>
                            </div>
                            <p className="text-white text-base sm:text-[1vw] font-medium">
                                $ 27
                            </p>
                        </Link>
                        <h4 className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw] text-[#989292] flex items-center gap-[1vw] w-[30%]">
                            <img
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806603_in-stock.svg"
                                alt=""
                            />{" "}
                            in stock
                        </h4>
                    </div>
                    <div className="flex items-start gap-[1vw] mt-[1.5vw] font-semibold">
                        <span className="block mt-[0.7vw]">
                            <img
                                className="w-[1vw]"
                                src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806639_hand-notification.svg"
                                alt=""
                            />
                        </span>{" "}
                        <h4 className="text-base sm:text-[1vw] leading-[144%] sm:leading-[2vw]">
                            Every time you buy our premium tea, you help clean
                            the ocean of plastic!
                        </h4>
                    </div>
                </div>
            </div>
            <div className="mt-[15vw]">
                <Discount />
            </div>
        </>
    );
};

export default ProductsDetails;
