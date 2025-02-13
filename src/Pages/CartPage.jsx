import React from "react";

const CartPage = ({ CartOpenClose, setCartOpenClose }) => {
    return (
        <div
            className={`w-full h-screen bg-[#000000d0] fixed top-0 flex justify-center items-center z-0 transition-all duration-1000 opacity-0 p-0 sm:px-[5.15vw] md:px-[16.44vw] ${
                CartOpenClose == true && "opacity-100 z-50"
            }`}
        >
            <div className="container w-full h-full sm:h-auto bg-white p-10 sm:px-20 sm:py-24 rounded-4xl sm:rounded-[3vw] mx-auto flex flex-col items-start">
                <div className="flex justify-between items-center gap-[2vw] w-full mb-14 sm:mb-[3vw]">
                    <h2 className="uppercase text-xl sm:text-[1.6vw] font-semibold">
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
                <div className="pt-10 pb-0 w-full text-center">No items found.</div>
            </div>
        </div>
    );
};

export default CartPage;
