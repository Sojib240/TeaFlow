import React, { useContext, useEffect, useState } from "react";
import { cartContextData } from "../Utils/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CartPage = ({ CartOpenClose, setCartOpenClose }) => {
    // page title
    document.title = "TeaFlow － Products Cart";
    // cart data coming from context
    const [cart, setcart] = useContext(cartContextData);
    // handle price
    const [Price, setPrice] = useState();
    const handlePrice = () => {
        var priceing = 0;
        cart.map((product) => {
            priceing += product.amount * product.price;
            setPrice(priceing);
        });
    };
    useEffect(() => {
        handlePrice();
    });

    const handleAmount = (p, inDe, size) => {
        var temArr = cart;
        cart.map((cartIt, index) => {
            if (cartIt.id === p && cartIt.size === size) {
                temArr[index].amount += inDe;
            }
            if (temArr[index].amount === 0) {
                temArr[index].amount = 1;
            }
            if (temArr[index].amount >= 10) {
                temArr[index].amount = 10;
            }
            setcart([...temArr]);
        });
    };
    // handle remove
    const handleRemove = (id, size) => {
        const cartFilteredData = cart.filter(
            (fillItem) => !(fillItem.id == id && fillItem.size == size)
        );
        setcart(cartFilteredData);
    };
    // check-out
    const [checkOutState, setcheckOutState] = useState(false);
    const checkOut = () => {
        setcheckOutState(true);
        setTimeout(() => {
            setcheckOutState(false);
        }, 5000);
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            tansition={{ ease: "easeInOut" }}
            className={`w-full h-svh sm:h-screen bg-[#000000e1] fixed top-0 flex justify-center items-center z-0 transition-all duration-1000 opacity-0 p-0 sm:px-[5.15vw] md:px-[16.44vw] ${
                CartOpenClose == true && "z-[999]"
            }`}
        >
            <div
                className={`fixed top-0 right-0 transition-all duration-500 pt-5 sm:pt-[1vw] ${
                    checkOutState
                        ? "translate-x-[0] opacity-100 visible"
                        : "translate-x-[100%] opacity-0 invisible"
                }`}
            >
                <div className="pl-3 pr-2 sm:pl-[1.5vw] sm:pr-[1vw] py-3 sm:py-[1vw] rounded-tl-full rounded-bl-full bg-red-500">
                    <div className="font-GolosRegular text-[10px] sm:text-[0.8vw] tracking-[1px] text-white sm:tracking-[0.1vw] flex items-center gap-1 sm:gap-[0.6vw] lg:gap-[0.4vw]">
                        Checkout is{" "}
                        <span className="block w-4 sm:w-[1.5vw] lg:w-[1vw]">
                            <img
                                className="w-full"
                                src="/Images/disable.png"
                                alt=""
                            />
                        </span>{" "}
                        disabled on this site.
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="container w-full h-full sm:h-auto bg-white py-6 sm:p-[3.5vw] rounded-4xl sm:rounded-[3vw] mx-auto flex flex-col items-start"
            >
                <div className="flex justify-between items-center gap-[2vw] w-full mb-8 sm:mb-[2vw] px-5 sm:px-0">
                    <h2 className="uppercase text-2xl sm:text-[1.6vw] font-GolosDemiBold">
                        my Cart
                    </h2>
                    <div
                        onClick={() => setCartOpenClose(false)}
                        className="cursor-pointer"
                    >
                        <img
                            src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec806605_cross_close.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div
                    className={`cart-main w-full overflow-x-auto border border-[#F1F1F1] rounded-3xl sm:rounded-[3vw] ${
                        cart.length == 0
                            ? "h-[81.5vh] sm:h-[20vh]"
                            : "h-full sm:min-h-20vh sm:max-h-[50vh] relative"
                    }`}
                >
                    {cart.length == 0 ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <h2 className="text-base sm:text-[1vw] font-GolosRegular">
                                No items found.
                            </h2>
                        </div>
                    ) : (
                        cart.map(
                            ({
                                id,
                                title,
                                image,
                                price,
                                amount,
                                size,
                                param,
                            }) => {
                                return (
                                    <div
                                        key={id}
                                        className="cart-card flex justify-between items-start gap-[2.5vw] card border-b border-[#F1F1F1] w-full p-4 sm:p-[1.5vw] h-auto"
                                    >
                                        <Link
                                            to={`/product/${param}`}
                                            className="w-40 sm:w-[10vw] overflow-hidden cart-image border border-[#F1F1F1]"
                                        >
                                            <img
                                                className="w-full object-cover flex h-auto"
                                                src={image}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="w-full">
                                            <div className="flex justify-between flex-col sm:flex-row gap-5 sm:gap-0 w-full">
                                                <div className="flex flex-col items-start gap-[2vw] w-full">
                                                    <div className="">
                                                        <h4 className="text-lg sm:text-[1.3vw] font-GolosDemiBold uppercase">
                                                            {title}
                                                        </h4>
                                                        <p className="text-sm sm:text-[0.9vw] font-GolosRegular">
                                                            {size}
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={() =>
                                                            handleRemove(
                                                                id,
                                                                size
                                                            )
                                                        }
                                                        className="border-b border-[#ccc5c5] text-[#ACA6A6] text-[12px] cursor-pointer sm:text-[0.8vw] font-GolosRegular"
                                                    >
                                                        remove
                                                    </button>
                                                </div>
                                                <div className="flex sm:flex-col items-end w-full justify-between flex-row gap-[2.5vw]">
                                                    <div className=" flex gap-1 sm:gap-[0.15vw]">
                                                        <div className=" bg-[#F1F1F1] w-16 h-12 sm:w-[4.2vw] sm:h-[2.5vw] rounded-[0.3vw] flex items-center justify-center">
                                                            <p className="text-base sm:text-[1vw] font-GolosRegular">
                                                                {amount}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-1 sm:gap-[0.15vw] h-12 sm:h-[2.5vw]">
                                                            <button
                                                                onClick={() =>
                                                                    handleAmount(
                                                                        id,
                                                                        +1,
                                                                        size
                                                                    )
                                                                }
                                                                className="bg-[#F1F1F1] w-8 sm:w-[1.5vw] font-GolosRegular h-1/2 rounded-[0.2vw] overflow-hidden text-base sm:text-[0.8vw] font-bold cursor-pointer"
                                                            >
                                                                +
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleAmount(
                                                                        id,
                                                                        -1,
                                                                        size
                                                                    )
                                                                }
                                                                className="bg-[#F1F1F1] w-8 font-GolosRegular sm:w-[1.5vw] h-1/2 rounded-[0.2vw] overflow-hidden text-base sm:text-[0.8vw] font-bold cursor-pointer"
                                                            >
                                                                -
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className="font-GolosRegular text-lg sm:text-[1.1vw]">
                                                        $ {price}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        )
                    )}
                </div>
                {cart.length == 0 ? null : (
                    <div className="w-full px-5 sm:px-0">
                        <div className="flex justify-between items-center mt-8 sm:mt-[2vw] px-1 sm:px-[0.5vw]">
                            <h4 className="font-GolosRegular font-semibold text-lg sm:text-[1.5vw]">
                                Subtotal:
                            </h4>
                            <h4 className="font-GolosBold text-lg sm:text-[1.5vw] tracking-[1px]">
                                $ {Price}
                            </h4>
                        </div>
                        {Price && Price <= 49 && (
                            <div className="flex items-center gap-3 sm:gap-[0.6vw] text-sm sm:text-[0.9vw] font-GolosRegular py-5 sm:py-[1vw]">
                                <span>
                                    <img
                                        src="https://cdn.prod.website-files.com/6765d66f89f7f0b8ec8065e0/6765d66f89f7f0b8ec80661a_icon-add-free-shipping.svg"
                                        alt=""
                                    />
                                </span>
                                <span>
                                    Receive Free Shipping when your cart total
                                    $49
                                </span>
                            </div>
                        )}

                        <button
                            onClick={() => checkOut()}
                            className="hover:bg-[#222020] border-[#222020] border p-5 sm:p-[1.5vw] rounded-full w-full mt-8 sm:mt-[2vw] text-sm sm:text-[0.9vw] font-bold uppercase tracking-[0.2vw] text-center transition-all duration-200 hover:text-white font-GolosRegular cursor-pointer"
                        >
                            Continue to Checkout
                        </button>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default CartPage;
