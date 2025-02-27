import React, { useContext, useEffect, useState } from "react";
import Discount from "../Common/Discount";
import { Link, useParams } from "react-router-dom";
import { productContext } from "../Utils/Context";
import { cartContextData } from "../Utils/CartContext";
import SemilarProducts from "../Components/SemilarProducts";

const ProductsDetails = ({ titleChange, settitleChange }) => {
    const { id } = useParams();
    const [productsApiData, setproductsApiData] = useContext(productContext);
    const [singleProduct, setsingleProduct] = useState();
    const [cart, setcart] = useContext(cartContextData);
    let productPageTitle;

    const [imageSlider, setimageSlider] = useState();
    const handleSlider = (src) => {
        setimageSlider(src);
    };

    const singleProductId = () => {
        const product = productsApiData.products[id - 1];
        setsingleProduct(product);
        setimageSlider(product.image);
        productPageTitle = document.title = `TeaFlow － ${product.title}`;
    };
    // handle cart
    const handleCart = (product) => {
        var isTrue = false;
        cart.map((prod) => {
            if (prod.id === product.id) {
                isTrue = true;
            }
        });
        if (isTrue) {
            return;
        }
        setcart([...cart, product]);
    };

    //
    useEffect(() => {
        singleProductId();
    }, []);

    return (
        <>
            {singleProduct && (
                <div className="px-0 sm:px-[5.15vw] w-full flex gap-[6vw] font-GolosRegular relative">
                    <div className="w-full sm:w-[58%] pt-0 sm:pt-[5vw] bg-[#FFFFFF]">
                        <div className="px-0 text-[#9C9797] font-GolosRegular text-[13px] sm:text-[1vw] sm:flex gap-5 sm:gap-[1vw] capitalize mt-0 sm:mt-[-3.5vw] pb-[3vw] hidden ">
                            <span>Home</span>
                            <span>/</span>
                            <span>shop</span>
                            <span>/</span>
                            <span>{titleChange}</span>
                            <span>/</span>
                            <span className="capitalize">
                                {singleProduct.title}
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-[0.6vw] w-full">
                            {/* flex flex-row sm:flex-col */}
                            <div className="order-2 sm:order-1 w-full sm:w-[22.85%] grid grid-cols-4 sm:grid-cols-1 sm:grid-rows-4 gap-1 sm:gap-[0.6vw] px-5 sm:px-0">
                                <div
                                    className={`col-span-1${
                                        singleProduct.image == null
                                            ? "hidden"
                                            : "block"
                                    }`}
                                >
                                    <img
                                        onMouseEnter={() =>
                                            handleSlider(singleProduct.image)
                                        }
                                        className=" border border-[#f1f1f1] w-full h-full object-cover"
                                        src={
                                            singleProduct && singleProduct.image
                                        }
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={`col-span-1 ${
                                        singleProduct.minImg1 == null
                                            ? "hidden"
                                            : "block"
                                    }`}
                                >
                                    <img
                                        onMouseEnter={() =>
                                            handleSlider(singleProduct.minImg1)
                                        }
                                        className="border border-[#f1f1f1] w-full h-full object-cover"
                                        src={
                                            singleProduct &&
                                            singleProduct.minImg1
                                        }
                                        alt=""
                                    />
                                </div>

                                <div
                                    className={`col-span-1 ${
                                        singleProduct.minImg2 == null
                                            ? "hidden"
                                            : "block"
                                    }`}
                                >
                                    <img
                                        onMouseEnter={() =>
                                            handleSlider(singleProduct.minImg2)
                                        }
                                        className="border border-[#f1f1f1] w-full h-full object-cover"
                                        src={
                                            singleProduct &&
                                            singleProduct.minImg2
                                        }
                                        alt=""
                                    />
                                </div>

                                <div
                                    className={`col-span-1 ${
                                        singleProduct.minImg3 == null
                                            ? "hidden"
                                            : "block"
                                    }`}
                                >
                                    <img
                                        onMouseEnter={() =>
                                            handleSlider(singleProduct.minImg3)
                                        }
                                        className="border border-[#f1f1f1] w-full h-full object-cover"
                                        src={
                                            singleProduct &&
                                            singleProduct.minImg3
                                        }
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="order-1 sm:order-2 w-full rounded-[5vw] sm:h-[37vw] overflow-hidden flex border border-[#f1f1f1]">
                                <img
                                    className="object-cover flex w-full"
                                    src={imageSlider && imageSlider}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="w-full block sm:hidden mt-10 sm:mt-0 px-5 sm:px-0">
                            <div className="">
                                <h2 className="text-4xl sm:text-[3.5vw] uppercase font-GolosBold mb-4 sm:mb-[7vw]">
                                    {singleProduct && singleProduct.title}
                                </h2>
                                <div
                                    className={`${
                                        singleProduct.TastingNotes == null
                                            ? "hidden"
                                            : "block"
                                    } text-lg sm:text-[1.2vw] leading-[144%] sm:leading-[2vw] flex flex-col`}
                                >
                                    Tasting notes:{" "}
                                    <span>
                                        {singleProduct &&
                                            singleProduct.TastingNotes}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-[2vw] mt-6 sm:mt-[3vw]">
                                <button
                                    onClick={() => handleCart(singleProduct)}
                                    className="flex items-center justify-between gap-[0.5vw] bg-[#222020] px-8 py-6 sm:p-[2.2vw] rounded-full sm:w-[70%]"
                                >
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
                                        $ {singleProduct && singleProduct.price}
                                    </p>
                                </button>
                                <h4 className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw] text-[#989292] flex items-center gap-[1vw] w-full sm:w-[30%] mt-3 mb-2 sm:my-0">
                                    <img
                                        src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806603_in-stock.svg"
                                        alt=""
                                    />{" "}
                                    in stock
                                </h4>
                            </div>
                            <div className="flex items-center sm:items-start gap-3 sm:gap-[1vw] mt-5 font-GolosDemiBold">
                                <span className="block w-10 sm:w-auto mt-1">
                                    <img
                                        src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806639_hand-notification.svg"
                                        alt=""
                                    />
                                </span>{" "}
                                <h4 className="text-base sm:text-[1vw] leading-[144%] sm:leading-[2vw] font-GolosDemiBold">
                                    Every time you buy our premium tea, you help
                                    clean the ocean of plastic!
                                </h4>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-[5vw] mb-6 sm:mb-[4vw] px-5 sm:px-0">
                            <div className={`mb-6 sm:mb-[4vw]`}>
                                <h4
                                    className={`${
                                        singleProduct.aboutProduct == null
                                            ? "hidden"
                                            : "block"
                                    } text-xl sm:text-[1.4vw] leading-[144%] sm:leading-[2vw] font-GolosBold mb-5 sm:mb-[1vw]`}
                                >
                                    About product
                                </h4>
                                <div
                                    className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw] mb-[4vw] flex flex-col gap-5 sm:gap-[1.5vw]"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            singleProduct &&
                                            singleProduct.aboutProduct,
                                    }}
                                />
                            </div>
                            <div className={`mb-6 sm:mb-[4vw]`}>
                                <h4
                                    className={`${
                                        singleProduct.SteepingInstructions ==
                                        null
                                            ? "hidden"
                                            : "block"
                                    } text-xl sm:text-[1.4vw] leading-[144%] sm:leading-[2vw] font-GolosBold mb-5 sm:mb-[1vw]`}
                                >
                                    Steeping Instructions
                                </h4>
                                <div
                                    className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw] flex flex-col gap-5 sm:gap-[1.5vw]"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            singleProduct &&
                                            singleProduct.SteepingInstructions,
                                    }}
                                />
                            </div>
                            <div className="">
                                <h4
                                    className={`text-xl sm:text-[1.4vw] leading-[144%] sm:leading-[2vw] font-GolosBold mb-[1vw] ${
                                        singleProduct.Ingredients == null
                                            ? "hidden"
                                            : "block"
                                    }`}
                                >
                                    Ingredients
                                </h4>
                                <p className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw]">
                                    {singleProduct && singleProduct.Ingredients}
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-5 sm:px-0">
                            <div className="rounded-[5vw] mt-[5vw] bg-[#F7F7F7] px-[7vw] py-[4.5vw] flex flex-col gap-4 sm:gap-[1vw] text-base sm:text-[1.1vw] leading-[144%] sm:leading-[2vw]">
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
                                <div className="flex gap-4 sm:gap-[1vw] items-center">
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
                    </div>
                    <div
                        className={`w-[42%] hidden sm:block static sm:sticky top-0 right-0 ${
                            singleProduct.TastingNotes == null
                                ? "min-h-[32vw]"
                                : "min-h-[38vw]"
                        } h-full pt-[5vw]`}
                    >
                        <div className="">
                            <h2 className="text-[3.5vw] uppercase font-GolosBold mb-[7vw]">
                                {singleProduct && singleProduct.title}
                            </h2>
                            <div
                                className={`${
                                    singleProduct.TastingNotes == null
                                        ? "hidden"
                                        : "block"
                                } text-lg sm:text-[1.2vw] leading-[144%] sm:leading-[2vw] flex flex-col`}
                            >
                                Tasting notes:{" "}
                                <span>
                                    {singleProduct &&
                                        singleProduct.TastingNotes}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2vw] mt-[1.8vw]">
                            <button
                                onClick={() => handleCart(singleProduct)}
                                className="flex items-center justify-between gap-[0.5vw] bg-[#222020] p-[2.2vw] rounded-full w-full sm:w-[70%]"
                            >
                                <div className="flex items-center gap-[1vw]">
                                    <img
                                        className="w-[1vw]"
                                        src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806607_card-white.svg"
                                        alt=""
                                    />
                                    <span className="text-white block text-lg sm:text-[1vw] font-medium">
                                        ADD TO CART
                                    </span>
                                </div>
                                <p className="text-white text-base sm:text-[1vw] font-medium">
                                    $ {singleProduct && singleProduct.price}
                                </p>
                            </button>
                            <h4 className="text-lg sm:text-[1.1vw] leading-[144%] sm:leading-[2vw] text-[#989292] flex items-center gap-2 sm:gap-[1vw] w-[30%]">
                                <img
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806603_in-stock.svg"
                                    alt=""
                                />{" "}
                                in stock
                            </h4>
                        </div>
                        <div className="flex items-start gap-[1vw] mt-[1.5vw] font-GolosDemiBold">
                            <span className="block mt-[0.7vw]">
                                <img
                                    className="w-[1vw]"
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
                </div>
            )}
            <div className="">
                <SemilarProducts />
            </div>
            <div className="mt-[15vw]">
                <Discount />
            </div>
        </>
    );
};

export default ProductsDetails;
