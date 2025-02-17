import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../Utils/Context";

const Shop = () => {
    document.title = "PRODUCTS － TEAFLOW";
    const [productsApiData, setproductsApiData] = useContext(productContext);
    useEffect(() => {
        console.log(productsApiData.products);
    });
    return (
        <div className="px-[5.15vw] mx-auto">
            <h2 className="text-5xl sm:text-[8vw] font-bold uppercase leading-[100%] mt-10 sm:mt-[8vw] md:mt-[5vw]">
                products
            </h2>
            <div className="flex justify-between gap-10 sm:gap-[2.5vw] mt-16 sm:mt-[10vw] md:mt-[8vw]">
                <div className="hidden sm:block w-[20%] mt-[-2.5vw] bg-red-200"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-auto sm:ml-0 w-[90%] sm:w-[80%] gap-y-10 gap-x-0 sm:gap-y-[5.5vw] sm:gap-x-[2vw] md:gap-x-[1vw] md:gap-y-[4.5vw]">
                    {/* <div className="col-span-1 mt-[-2.5vw] group">
                        <div className="relative overflow-hidden">
                            <Link to={""}>
                                <img
                                    className="group-hover:scale-125 duration-1600 transition-all"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg"
                                    alt=""
                                />
                            </Link>
                            <div className="w-full h-full absolute top-0 left-0 z-10 px-[2vw]">
                                <div className="px-[2vw] py-[2.5vw] bg-[#222020] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[1vw] group-hover:opacity-100 transition-all duration-300 w-[90%] mx-auto cursor-pointer">
                                    <p className="text-[1vw] tracking-[0.1vw] text-white font-medium">
                                        ADD TO CART
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-2xl sm:text-[2.5vw] md:text-[1.6vw] mt-5 sm:mt-[1vw] font-bold">
                            RED TEA #6
                        </h4>
                        <p className="text-lg sm:text-[1.8vw] md:text-[1vw] py-[0.4vw]">
                            Flavor: juicy, sweet and strong
                        </p>
                        <p className="text-xl font-semibold sm:text-[2.2vw] md:text-[1.2vw]">
                            $ 27{" "}
                        </p>
                    </div> */}
                    {/* <div className="col-span-1 mt-[0.8vw] group">
                        <div className="relative overflow-hidden rounded-[50px]">
                            <Link to={""}>
                                <img
                                    className="group-hover:scale-125 duration-1600 transition-all"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg"
                                    alt=""
                                />
                            </Link>
                            <div className="w-full h-full absolute top-0 left-0 z-10 px-[2vw]">
                                <div className="px-[2vw] py-[2.5vw] bg-[#222020] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[1vw] group-hover:opacity-100 transition-all duration-300 w-[90%] mx-auto cursor-pointer">
                                    <p className="text-[1vw] tracking-[0.1vw] text-white font-medium">
                                        ADD TO CART
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-2xl sm:text-[2.5vw] md:text-[1.6vw] mt-5 sm:mt-[1vw] font-bold">
                            RED TEA #6
                        </h4>
                        <p className="text-lg sm:text-[1.8vw] md:text-[1vw] py-[0.4vw]">
                            Flavor: juicy, sweet and strong
                        </p>
                        <p className="text-xl font-semibold sm:text-[2.2vw] md:text-[1.2vw]">
                            $ 27{" "}
                        </p>
                    </div>
                    <div className="col-span-1 mt-[-1.2vw] group">
                        <div className="relative overflow-hidden rounded-[50px]">
                            <Link to={""}>
                                <img
                                    className="group-hover:scale-125 duration-1600 transition-all"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg"
                                    alt=""
                                />
                            </Link>
                            <div className="w-full h-full absolute top-0 left-0 z-10 px-[2vw]">
                                <div className="px-[2vw] py-[2.5vw] bg-[#222020] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[1vw] group-hover:opacity-100 transition-all duration-300 w-[90%] mx-auto cursor-pointer">
                                    <p className="text-[1vw] tracking-[0.1vw] text-white font-medium">
                                        ADD TO CART
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-2xl sm:text-[2.5vw] md:text-[1.6vw] mt-5 sm:mt-[1vw] font-bold">
                            RED TEA #6
                        </h4>
                        <p className="text-lg sm:text-[1.8vw] md:text-[1vw] py-[0.4vw]">
                            Flavor: juicy, sweet and strong
                        </p>
                        <p className="text-xl font-semibold sm:text-[2.2vw] md:text-[1.2vw]">
                            $ 27{" "}
                        </p>
                    </div>
                    <div className="col-span-1 mt-[-2.5vw] group">
                        <div className="relative overflow-hidden rounded-[50px]">
                            <Link to={""}>
                                <img
                                    className="group-hover:scale-125 duration-1600 transition-all"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg"
                                    alt=""
                                />
                            </Link>
                            <div className="w-full h-full absolute top-0 left-0 z-10 px-[2vw]">
                                <div className="px-[2vw] py-[2.5vw] bg-[#222020] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[1vw] group-hover:opacity-100 transition-all duration-300 w-[90%] mx-auto cursor-pointer">
                                    <p className="text-[1vw] tracking-[0.1vw] text-white font-medium">
                                        ADD TO CART
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-2xl sm:text-[2.5vw] md:text-[1.6vw] mt-5 sm:mt-[1vw] font-bold">
                            RED TEA #6
                        </h4>
                        <p className="text-lg sm:text-[1.8vw] md:text-[1vw] py-[0.4vw]">
                            Flavor: juicy, sweet and strong
                        </p>
                        <p className="text-xl font-semibold sm:text-[2.2vw] md:text-[1.2vw]">
                            $ 27{" "}
                        </p>
                    </div>
                    <div className="col-span-1 mt-[0.8vw] group">
                        <div className="relative overflow-hidden rounded-[50px]">
                            <Link to={""}>
                                <img
                                    className="group-hover:scale-125 duration-1600 transition-all"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg"
                                    alt=""
                                />
                            </Link>
                            <div className="w-full h-full absolute top-0 left-0 z-10 px-[2vw]">
                                <div className="px-[2vw] py-[2.5vw] bg-[#222020] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[1vw] group-hover:opacity-100 transition-all duration-300 w-[90%] mx-auto cursor-pointer">
                                    <p className="text-[1vw] tracking-[0.1vw] text-white font-medium">
                                        ADD TO CART
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-2xl sm:text-[2.5vw] md:text-[1.6vw] mt-5 sm:mt-[1vw] font-bold">
                            RED TEA #6
                        </h4>
                        <p className="text-lg sm:text-[1.8vw] md:text-[1vw] py-[0.4vw]">
                            Flavor: juicy, sweet and strong
                        </p>
                        <p className="text-xl font-semibold sm:text-[2.2vw] md:text-[1.2vw]">
                            $ 27{" "}
                        </p>
                    </div>
                    <div className="col-span-1 mt-[-1.2] group">
                        <div className="relative overflow-hidden">
                            <Link to={"/"}>
                                <img
                                    className="group-hover:scale-125 duration-1600 transition-all"
                                    src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec80660c/6765d66f89f7f0b8ec8069ef_red-1200-min.jpg"
                                    alt=""
                                />
                            </Link>
                            <div className="w-full h-full absolute top-0 left-0 z-10 px-[2vw]">
                                <div className="px-[2vw] py-[2.5vw] bg-[#222020] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[1vw] group-hover:opacity-100 transition-all duration-300 w-[90%] mx-auto cursor-pointer">
                                    <p className="text-[1vw] tracking-[0.1vw] text-white font-medium">
                                        ADD TO CART
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-2xl sm:text-[2.5vw] md:text-[1.6vw] mt-5 sm:mt-[1vw] font-bold">
                            RED TEA #6
                        </h4>
                        <p className="text-lg sm:text-[1.8vw] md:text-[1vw] py-[0.4vw]">
                            Flavor: juicy, sweet and strong
                        </p>
                        <p className="text-xl font-semibold sm:text-[2.2vw] md:text-[1.2vw]">
                            $ 27{" "}
                        </p>
                    </div> */}
                    {productsApiData.products &&
                        productsApiData.products.map(
                            ({ id, title, image, price }) => {
                                return (
                                    <>
                                        <div  key={id} className="col-span-1 mt-[-2.5vw] group">
                                            <div className="relative overflow-hidden">
                                                <Link to={""}>
                                                    <img
                                                        className="group-hover:scale-125 duration-1200 transition-all"
                                                        src={image}
                                                        alt=""
                                                    />
                                                </Link>
                                                <div className="w-full h-full absolute top-0 left-0 z-10 px-[2vw]">
                                                    <div className="px-[2vw] py-[2vw] bg-[#222020] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[1vw] group-hover:opacity-100 transition-all duration-[0.4s] w-[90%] mx-auto cursor-pointer">
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
                                            $ {price}
                                            </p>
                                        </div>
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
