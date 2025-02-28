import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../Utils/Context";
import { cartContextData } from "../Utils/CartContext";
import { motion } from "framer-motion";

const AllTopSales = () => {
    // data coming from context api
    const [productsApiData, setproductsApiData] = useContext(productContext);
    // filtered data for top sale
    const [filterProduct, setfilterProduct] = useState();
    const topSaleFilter = () => {
        productsApiData.products &&
            productsApiData.products.map((p) => {
                const filterData = productsApiData.products.filter(
                    (product) => p.TopSale !== product.TopSale
                );
                setfilterProduct(filterData);
            });
    };
    useEffect(() => {
        topSaleFilter();
    }, [productsApiData]);
    //
    const [cart, setcart] = useContext(cartContextData);
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

    return (
        <div className="w-full px-5 sm:pl-[14.44vw] pr-[5.14vw] pt-16 sm:pt-[5vw]">
            <div className="inline-block">
                <Link
                    to={"/catagory/top-sales"}
                    
                >
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5}}
                        className="text-sm sm:text-[1vw] flex gap-2 sm:gap-[0.4vw] font-GolosRegular"
                    >
                        <span className="block border-b">all top sales</span>
                        <span className="mt-[-0.5vw] block">10+</span>
                    </motion.div>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-auto sm:ml-0 gap-y-10 gap-x-0 sm:gap-y-[5.5vw] sm:gap-x-[2vw] md:gap-x-[1vw] md:gap-y-[4.5vw] pt-10 sm:pt-[3.5vw]">
                {filterProduct &&
                    filterProduct.map((product, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.08 * index,
                                }}
                                key={product.id}
                                className="box col-span-1 mt-[-2.5vw] group card"
                            >
                                <div className="card-image relative overflow-hidden">
                                    <Link
                                        to={`/productsDetails/${product.id}`}
                                        className="relative z-30"
                                    >
                                        <img
                                            className="group-hover:scale-100 lg:group-hover:scale-125 duration-1200 transition-all"
                                            src={product.image}
                                            alt=""
                                        />
                                    </Link>
                                    <button
                                        onClick={() => handleCart(product)}
                                        className="px-[2vw] py-[2vw] bg-[#111111] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[-15vw]
                                            group-hover:opacity-0 
                                            lg:group-hover:bottom-[1vw] lg:group-hover:opacity-100 transition-all duration-[0.4s] w-[90%] mx-auto cursor-pointer hover:bg-[#222020] z-50"
                                    >
                                        <span className="text-[1vw] tracking-[0.1vw] text-white font-GolosRegular block">
                                            ADD TO CART
                                        </span>
                                    </button>
                                </div>
                                <h4 className="text-2xl sm:text-[2.4vw] md:text-[1.3vw] mt-5 sm:mt-[1vw] font-GolosDemiBold text-[#222020] uppercase">
                                    {product.title}
                                </h4>
                                <p className="text-base sm:text-[1.7vw] md:text-[0.9vw] py-2 sm:py-[0.4vw] text-[#413F3F] font-GolosRegular">
                                    {product.flavor}
                                </p>
                                <p className="text-xl font-GolosRegular sm:text-[2.2vw] md:text-[1.2vw] text-[#979191]">
                                    $ {product.price}
                                </p>
                            </motion.div>
                        );
                    })}
            </div>
        </div>
    );
};

export default AllTopSales;
