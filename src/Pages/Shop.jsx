import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productContext } from "../Utils/Context";
import { cartContextData } from "../Utils/CartContext";
import { CiFilter } from "react-icons/ci";
import { MdArrowBackIosNew } from "react-icons/md";
import Title from "../Common/Title";
import Discount from "../Common/Discount";
import { motion } from "framer-motion";

const Shop = ({
    newCategoriesData,
    setnewCategoriesData,
    titleChange,
    settitleChange,
}) => {
    document.title = "TeaFlow － Products";
    const [productsApiData] = useContext(productContext);
    const { slug } = useParams();
    const { products } = productsApiData;

    // filter data
    useEffect(() => {
        const handleCategoriesFilter = () => {
            const cleanedSlug = slug.replace(/-/g, " ");
            settitleChange(cleanedSlug);
            const filter =
                products &&
                products.filter((p) => {
                    if (Array.isArray(p.slug)) {
                        return p.slug.includes(slug);
                    }
                    return p.slug === slug;
                });
            setnewCategoriesData(filter);

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };
        handleCategoriesFilter();
    }, [slug, products]);

    const [DropDown, setDropDown] = useState(false);
    const [cart, setcart] = useContext(cartContextData);
    const [filterOpenClose, setfilterOpenClose] = useState(false);
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
    const handleDropDown = () => {
        setDropDown(!DropDown);
    };

    return (
        <>
            <div className="overflow-hidden w-auto h-auto">
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="px-[5.15vw] pt-8 sm:pt-[3vw] text-[#9C9797] font-GolosRegular text-[13px] sm:text-[1vw] sm:flex gap-5 sm:gap-[1.5vw] capitalize hidden"
                >
                    <span>Home</span>
                    <span>/</span>
                    <span>{titleChange}</span>
                </motion.div>
            </div>

            <div className="pt-10 sm:pt-0">
                <Title text={titleChange} />
            </div>
            <div className="px-[5.15vw] mx-auto">
                <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-[4vw] mt-14">
                    <div className="mb-0 block sm:hidden">
                        <button
                            onClick={() => setfilterOpenClose(true)}
                            className="flex items-center gap-4 px-5 py-[6px] border rounded-full uppercase tracking-[1px] font-GolosRegular"
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
                        className={`sm:block w-full h-[90vh] sm:h-full min-h-auto sm:min-h-auto bg-white sm:bg-transparent sm:w-[15%] fixed sm:sticky sm:top-0 bottom-0 left-0 z-[9999999] sm:z-auto pl-6 pr-6 pb-6 pt-6 rounded-tl-4xl rounded-tr-4xl translate-y-[0%] sm:translate-y-0 sm:pt-[6vw] sm:pb-0 sm:pl-0 sm:pr-0 ${
                            filterOpenClose === true
                                ? "translate-y-[0%]"
                                : "translate-y-[105%]"
                        } duration-300 transition-all`}
                    >
                        <div className="flex flex-col gap-7 sm:gap-[1.2vw] leading-[144%] sm:leading-[1.8vw]">
                            <div className="flex sm:hidden justify-between items-center gap-[2vw] w-full mb-8 sm:mb-[2vw] pt-5">
                                <h2 className="uppercase text-base sm:text-[1.6vw] font-GolosRegular text-[#747373]">
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
                            <div>
                                <div className="overflow-hidden w-auto h-auto">
                                    <motion.div
                                        initial={{ opacity: 0, y: "100%" }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                        onClick={() => handleDropDown()}
                                        className="flex items-center text-[22px] sm:text-[1.2vw] uppercase font-GolosDemiBold w-full justify-between cursor-pointer"
                                    >
                                        <span>Tea Type</span>
                                        <span
                                            className={` duration-300 transition-all ${
                                                DropDown === true
                                                    ? "rotate-90"
                                                    : "-rotate-90"
                                            } block text-lg  sm:text-[0.9vw]`}
                                        >
                                            <MdArrowBackIosNew />
                                        </span>
                                    </motion.div>
                                </div>

                                <div
                                    className={`text-lg sm:text-[1.1vw] font-GolosRegular leading-[180%] sm:leading-[1.8vw] mt-5 sm:mt-[0.6vw] pl-4 sm:pl-0 flex flex-col gap-[0.2vw] lowercase ${
                                        DropDown === true ? "block" : "hidden"
                                    }`}
                                >
                                    {productsApiData.subCategories &&
                                        productsApiData.subCategories.map(
                                            ({ SubTitle, id, slug }, index) => {
                                                return (
                                                    <Link
                                                        to={`/catagory/${decodeURIComponent(
                                                            slug
                                                        )}`}
                                                        key={id}
                                                        onClick={() =>
                                                            setfilterOpenClose(
                                                                false
                                                            )
                                                        }
                                                        className="cursor-pointer overflow-hidden w-auto h-auto block"
                                                    >
                                                        <div className="inline-block">
                                                            <motion.p
                                                                initial={{
                                                                    opacity: 0,
                                                                    y: "100%",
                                                                }}
                                                                whileInView={{
                                                                    opacity: 1,
                                                                    y: 0,
                                                                }}
                                                                viewport={{
                                                                    once: true,
                                                                }}
                                                                transition={{
                                                                    duration: 0.5,
                                                                    delay:
                                                                        0.1 *
                                                                        index,
                                                                }}
                                                                className="block hover:bg-[#f7f7f7] active:bg-[#f1f1f1] px-3 py-1 sm:py-[0.2vw] sm:px-[1vw] rounded-full"
                                                            >
                                                                {SubTitle}
                                                            </motion.p>
                                                        </div>
                                                    </Link>
                                                );
                                            }
                                        )}
                                </div>
                            </div>
                            {productsApiData.categories &&
                                productsApiData.categories.map(
                                    ({ id, categoryName, slug }, index) => {
                                        return (
                                            <div key={id}>
                                                <div className="flex items-center text-[22px] sm:text-[1.2vw] uppercase font-GolosDemiBold w-full justify-between cursor-pointer overflow-hidden h-auto">
                                                    <Link
                                                        to={`/catagory/${slug}`}
                                                        onClick={() =>
                                                            setfilterOpenClose(
                                                                false
                                                            )
                                                        }
                                                    >
                                                        <motion.p
                                                            initial={{
                                                                opacity: 0,
                                                                y: "100%",
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay:
                                                                    0.1 * index,
                                                            }}
                                                        >
                                                            {categoryName}
                                                        </motion.p>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-auto sm:ml-0 w-full sm:w-[85%] gap-y-10 gap-x-0 sm:gap-y-[5.5vw] sm:gap-x-[2vw] md:gap-x-[1vw] md:gap-y-[3vw] sm:pt-[6vw]">
                        {newCategoriesData &&
                            newCategoriesData.map((product, index) => {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 150 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.06 * index,
                                        }}
                                        key={product.id}
                                        className="col-span-1 group card"
                                    >
                                        <div className="card-image relative overflow-hidden">
                                            <Link
                                                to={`/product/${product.param}`}
                                                className="relative z-30"
                                            >
                                                <img
                                                    className="group-hover:scale-100 lg:group-hover:scale-125 duration-1200 transition-all"
                                                    src={product.image}
                                                    alt=""
                                                />
                                            </Link>
                                            {/* cart button */}
                                            <button
                                                onClick={() =>
                                                    handleCart(product)
                                                }
                                                className="px-[2vw] active:scale-90 py-[2vw] bg-[#111111] rounded-full flex justify-center items-center absolute left-0 bottom-[-15%] right-0 opacity-0 group-hover:bottom-[-15vw]
                                            group-hover:opacity-0 
                                            lg:group-hover:bottom-[1vw] lg:group-hover:opacity-100 transition-all duration-[0.4s] w-[90%] mx-auto cursor-pointer hover:bg-[#222020] z-50"
                                            >
                                                <span className="text-[1vw] tracking-[0.1vw] text-white font-GolosRegular block">
                                                    ADD TO CART
                                                </span>
                                            </button>
                                        </div>
                                        <h4 className="text-2xl sm:text-[2.4vw] md:text-[1.3vw] mt-5 sm:mt-[1vw] font-GolosRegular font-semibold text-[#222020] uppercase">
                                            {product.title}
                                        </h4>
                                        <p className="text-base sm:text-[1.7vw] md:text-[0.9vw] py-[0.4vw] text-[#413F3F] font-GolosRegular">
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
            </div>
            <div className="mt-16 sm:mt-[16vw]">
                <Discount />
            </div>
        </>
    );
};

export default Shop;
