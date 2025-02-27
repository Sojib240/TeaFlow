import React, { useContext } from "react";
import Title from "../Utils/CartContext";
import { cartContextData } from "../Utils/CartContext";

const CheckOut = () => {
    const [cart, setcart] = useContext(cartContextData);
    return (
        <>
            <Title text={"checkout"} />
            <div className="px-0 mt-10 sm:px-[5.14vw] lg:px-[14.44vw] sm:mt-[6vw]">
                <div className="flex items-start gap-0 sm:gap-[2vw] flex-col sm:flex-row">
                    <div className="py-5 sm:py-[1.5vw] w-full sm:w-[60%] bg-[#F1F1F1] px-5 sm:px-[1.5vw] rounded-bl-0 rounded-br-0 sm:rounded-[1vw]">
                        <div className="mb-[1vw]">
                            <h4 className="text-2xl sm:text-[1.6vw] uppercase font-semibold font-GolosRegular mb-5 sm:mb-[1.5vw]">
                                Contact
                            </h4>
                            <div className="">
                                <input
                                    className="w-full rounded-[0.8vw] outline-none text-[12px] sm:text-[0.8vw] font-GolosRegular py-3 sm:py-[1vw] pl-5 sm:pl-[0.8vw] bg-white"
                                    type="text"
                                    placeholder="Your Email Address"
                                />
                            </div>
                        </div>
                        <div className="">
                            <h4 className="text-2xl sm:text-[1.6vw] uppercase font-semibold font-GolosRegular my-5 sm:my-[1.5vw]">
                                delivery address
                            </h4>
                            <div className="grid grid-cols-2 gap-3 sm:gap-[1vw]">
                                <div className="col-span-1">
                                    <label className="pb-2 sm:pb-[0.5vw] text-sm sm:text-base block font-GolosRegular">
                                        First Name*
                                    </label>
                                    <input
                                        className="w-full rounded-[0.8vw] outline-none text-[12px] sm:text-[0.8vw] font-GolosRegular py-3 sm:py-[1vw] pl-5 sm:pl-[0.8vw] bg-white"
                                        type="text"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="pb-2 sm:pb-[0.5vw] text-sm sm:text-base block font-GolosRegular">
                                        Last Name*
                                    </label>
                                    <input
                                        className="w-full rounded-[0.8vw] outline-none text-[12px] sm:text-[0.8vw] font-GolosRegular py-3 sm:py-[1vw] pl-5 sm:pl-[0.8vw] bg-white"
                                        type="text"
                                    />
                                </div>
                                <div className="w-full col-span-2">
                                    <label className="pb-2 sm:pb-[0.5vw] text-sm sm:text-base block font-GolosRegular">
                                        Country*
                                    </label>
                                    <input
                                        className="w-full rounded-[0.8vw] outline-none text-[12px] sm:text-[0.8vw] font-GolosRegular py-3 sm:py-[1vw] pl-5 sm:pl-[0.8vw] bg-white"
                                        type="text"
                                    />
                                </div>
                                <div className="w-full col-span-2">
                                    <label className="pb-2 sm:pb-[0.5vw] text-sm sm:text-base block font-GolosRegular">
                                        Address*
                                    </label>
                                    <input
                                        className="w-full rounded-[0.8vw] outline-none text-[12px] sm:text-[0.8vw] font-GolosRegular py-3 sm:py-[1vw] pl-5 sm:pl-[0.8vw] bg-white"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 sm:gap-[1vw] sm:mt-[1vw] mt-5">
                                <div className="col-span-1">
                                    <label className="pb-2 sm:pb-[0.5vw] text-sm sm:text-base block font-GolosRegular">
                                        Mobile No*
                                    </label>
                                    <input
                                        className="w-full rounded-[0.8vw] outline-none text-[12px] sm:text-[0.8vw] font-GolosRegular py-3 sm:py-[1vw] px-5 sm:px-[0.8vw] bg-white"
                                        type="number"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="pb-2 sm:pb-[0.5vw] text-sm sm:text-base block font-GolosRegular">
                                        Post Code*
                                    </label>
                                    <input
                                        className="w-full rounded-[0.8vw] outline-none text-[12px] sm:text-[0.8vw] font-GolosRegular py-3 sm:py-[1vw] px-5 sm:px-[0.8vw] bg-white"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="sm:mt-[1vw] mt-5">
                                <label className="pb-2 sm:pb-[0.5vw] text-sm sm:text-base block font-GolosRegular">
                                    Order Notes (optional)*
                                </label>
                                <textarea
                                    className="resize-x-none h-32 sm:h-[10vw] w-full rounded-[0.8vw] outline-none text-[12px] sm:text-[0.8vw] font-GolosRegular py-5 sm:py-[0.8vw] px-5 sm:px-[0.8vw] bg-white"
                                    name=""
                                    id=""
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F1F1F1] pt-10 pb-5 sm:py-[1.5vw] w-full sm:w-[40%] rounded-bl-2xl rounded-br-2xl sm:rounded-[1vw]">
                        <div className="px-5 sm:px-[1.5vw]">
                            <h4 className="text-2xl sm:text-[1.6vw] uppercase font-semibold font-GolosRegular mb-7 sm:mb-[1.5vw]">
                                detail product
                            </h4>
                            {/*  */}
                            <div className="flex flex-col gap-4 sm:gap-[0.8vw] max-h-[15vw] min-h-[6vw] h-full overflow-x-auto cart-main pr-5 sm:pr-[1vw]">
                                {cart &&
                                    cart.map(
                                        ({
                                            id,
                                            title,
                                            image,
                                            price,
                                            flavor,
                                        }) => {
                                            return (
                                                <div key={id} className="flex justify-between gap-5 sm:gap-[1vw] w-full border-b border-[#dadada] pb-5 sm:pb-[0.8vw]">
                                                    <div className="w-40 sm:w-[10vw] overflow-hidden cart-image rounded-[1vw]">
                                                        <img
                                                            className="w-full object-cover flex h-full"
                                                            src={image}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="flex flex-col items-start gap-5 sm:gap-[1.3vw] w-full">
                                                        <div className="">
                                                            <h4 className="text-base sm:text-[1.1vw] uppercase font-GolosRegular font-semibold">
                                                                {title}
                                                            </h4>
                                                            <p className="text-[12px] sm:text-[0.8vw] font-GolosRegular">
                                                                {flavor}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between items-center w-full">
                                                            <p className="font-GolosRegular text-base sm:text-[1vw]">
                                                                $ {price}
                                                            </p>
                                                            <p className="text-[12px] sm:text-[0.8vw] font-GolosRegular">
                                                                X 1
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                            </div>
                            <div className="mt-8 sm:mt-[2.5vw] flex flex-col gap-3 sm:gap-[0.5vw]">
                                <div className="flex items-center justify-between w-full font-GolosRegular font-semibold text-base sm:text-[1vw]">
                                    <span className="block tracking-[0.05vw] uppercase">
                                        sub total
                                    </span>{" "}
                                    <span className="block font-GolosRegular">
                                        $279.00
                                    </span>
                                </div>
                                <div className="flex gap-5 sm:gap-[1.6vw] justify-between w-full font-GolosRegular font-semibold text-base sm:text-[1vw]">
                                    <span className="block tracking-[0.05vw] uppercase w-auto">
                                        shipping
                                    </span>
                                    <textarea
                                        className="resize-x-none h-12 sm:h-[3vw] rounded-[0.5vw] bg-white w-full font-GolosRegular font-normal outline-none px-2 sm:px-[0.5vw] pt-1 sm:pt-[0.5vw] text-[12px] sm:text-[0.8vw]"
                                        name=""
                                        id=""
                                    ></textarea>
                                </div>
                                <div className="flex items-center justify-between w-full font-GolosRegular font-semibold text-base sm:text-[1vw]">
                                    <span className="block tracking-[0.05vw] uppercase">
                                        total
                                    </span>
                                    <span className="block font-GolosRegular">
                                        $279.00
                                    </span>
                                </div>
                            </div>
                            <button className="hover:bg-[#222020] border-[#222020] border p-5 sm:p-[1.5vw] rounded-full w-full mt-10 sm:mt-[2.5vw] text-sm sm:text-[0.9vw] font-bold uppercase tracking-[0.2vw] text-center transition-all duration-200 hover:text-white font-GolosRegular cursor-pointer">
                                Place Order
                            </button>
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOut;
