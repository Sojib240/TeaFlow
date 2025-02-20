import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../Utils/Context";
import { CiFilter } from "react-icons/ci";

const Shop = () => {
    document.title = "PRODUCTS － TEAFLOW";
    const [productsApiData, setproductsApiData] = useContext(productContext);
    const [filterOpenClose, setfilterOpenClose] = useState(false);

    console.log(filterOpenClose);
    return (
        <div className="px-[5.15vw] mx-auto">
            <h2 className="text-5xl sm:text-[8vw] font-bold uppercase leading-[100%] mt-10 sm:mt-[8vw] md:mt-[5vw]">
                products
            </h2>
            <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-[2.5vw] mt-16 sm:mt-[10vw] md:mt-[8vw]">
                <div className="mb-6 block sm:hidden">
                    <button
                        onClick={() => setfilterOpenClose(true)}
                        className="flex items-center gap-4 px-5 py-[6px] border rounded-full uppercase tracking-[1px]"
                    >
                        Filters
                        <span>
                            <CiFilter />
                        </span>
                    </button>
                </div>
                <div
                    className={`fixed top-0 duration-300 transition-all ${
                        filterOpenClose === true
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    } left-0 bg-[#000000d0] h-screen w-full z-[9999]`}
                ></div>
                <div
                    className={`sm:block w-full h-[92vh] sm:h-auto bg-white sm:bg-transparent sm:w-[20%] mt-[-2.5vw] fixed sm:static bottom-0 left-0 z-[9999999] sm:z-auto p-6 sm:p-0 rounded-tl-4xl rounded-tr-4xl translate-y-[0%] sm:translate-y-0 ${
                        filterOpenClose === true
                            ? "translate-y-[0%]"
                            : "translate-y-[105%]"
                    } duration-200 transition-all`}
                >
                    <div className="flex flex-col gap-4 sm:gap-[0.75vw]">
                        <div className="flex sm:hidden justify-between items-center gap-[2vw] w-full mb-8 sm:mb-[2vw] pt-5">
                            <h2 className="uppercase text-[17px] sm:text-[1.6vw] font-semibold text-[#747373]">
                                Filters
                            </h2>
                            <div
                                onClick={() => setfilterOpenClose(false)}
                                className="cursor-pointer"
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806605_cross_close.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        {productsApiData.categories &&
                            productsApiData.categories.map(
                                ({ id, categoryName }) => {
                                    return (
                                        <>
                                            <Link
                                                key={id}
                                                to={""}
                                                className="text-[22px] sm:text-[1.2vw] uppercase font-semibold"
                                            >
                                                {categoryName}
                                            </Link>
                                        </>
                                    );
                                }
                            )}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-auto sm:ml-0 w-[90%] sm:w-[80%] gap-y-10 gap-x-0 sm:gap-y-[5.5vw] sm:gap-x-[2vw] md:gap-x-[1vw] md:gap-y-[4.5vw]">
                    {productsApiData.products &&
                        productsApiData.products.map(
                            ({ id, title, image, price }) => {
                                return (
                                    <>
                                        <Link
                                            to={`/productsDetails/${id}`}
                                            key={id}
                                            className="col-span-1 mt-[-2.5vw] group"
                                        >
                                            <div className="card-image relative overflow-hidden rounded-[4vw]">
                                                <Link to={""}>
                                                    <img
                                                        className="group-hover:scale-125 duration-1200 transition-all"
                                                        src={image}
                                                        alt=""
                                                    />
                                                </Link>
                                                <div className="w-full h-full absolute top-0 left-0 z-10 px-[2vw]">
                                                    <div className="px-[2vw] py-[2vw] bg-[#111111] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[1vw] group-hover:opacity-100 transition-all duration-[0.4s] w-[90%] mx-auto cursor-pointer hover:bg-[#222020]">
                                                        <p className="text-[1vw] tracking-[0.1vw] text-white font-medium">
                                                            ADD TO CART
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 className="text-2xl sm:text-[2.4vw] md:text-[1.3vw] mt-5 sm:mt-[1vw] font-bold text-[#222020] uppercase">
                                                {title}
                                            </h4>
                                            <p className="text-lg sm:text-[1.7vw] md:text-[0.9vw] py-[0.4vw] text-[#413F3F]">
                                                Flavor: juicy, sweet and strong
                                            </p>
                                            <p className="text-xl font-semibold sm:text-[2.2vw] md:text-[1.2vw] text-[#979191]">
                                                ${' '} {price}
                                            </p>
                                        </Link>
                                    </>
                                );
                            }
                        )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
