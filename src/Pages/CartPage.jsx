import React, { useContext } from "react";
import { cartContextData } from "../Utils/CartContext";

const CartPage = ({ CartOpenClose, setCartOpenClose }) => {
    document.title = "PRODUCTS CART － TEAFLOW";
        const [cart, setcart] = useContext(cartContextData);
    return (
        <div
            className={`w-full h-screen bg-[#000000d0] fixed top-0 flex justify-center items-center z-0 transition-all duration-1000 opacity-0 p-0 sm:px-[5.15vw] md:px-[16.44vw] ${
                CartOpenClose == true && "opacity-100 z-[999]"
            }`}
        >
            <div className="container w-full h-full sm:h-auto bg-white py-6 sm:p-[3.5vw] rounded-4xl sm:rounded-[3vw] mx-auto flex flex-col items-start">
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
                <div className="cart-main w-full h-[70vh] sm:h-[55vh] overflow-x-auto border border-[#F1F1F1] rounded-3xl sm:rounded-[3vw]">
                    {cart == [] || cart == "undifiend"
                        ? null
                        : cart.map(
                              ({
                                  id,
                                  title,
                                  image,
                                  price,
                                  amount,
                                  cartDetails
                              }) => {
                                  return (
                                      <>
                                          <div
                                              key={id}
                                              className="card flex justify-between gap-[2.5vw] card border-b border-[#F1F1F1] w-full p-4 sm:p-[1.5vw]"
                                          >
                                              <div className="img w-40 sm:w-[10vw] overflow-hidden rounded-2xl sm:rounded-[1.5vw]">
                                                  <img
                                                      className="w-full object-cover flex h-full sm:h-auto"
                                                      src={image}
                                                      alt=""
                                                  />
                                              </div>
                                              <div className="w-full">
                                                  <div className="flex justify-between flex-col sm:flex-row gap-5 sm:gap-0 w-full">
                                                      <div className="flex flex-col items-start gap-[2vw] w-full">
                                                          <div className="">
                                                              <h4 className="text-lg sm:text-[1.4vw] font-GolosDemiBold">
                                                                  {title}
                                                              </h4>
                                                              <p className="text-sm sm:text-[1.1vw] font-GolosRegular">
                                                                  {cartDetails}
                                                              </p>
                                                          </div>
                                                          <p className="border-b border-[#ccc5c5] text-[#ACA6A6] text-[12px] sm:text-[0.8vw] font-GolosRegular">
                                                              remove
                                                          </p>
                                                      </div>
                                                      <div className="flex sm:flex-col items-end w-full justify-between flex-row gap-[2.5vw]">
                                                          <div className=" flex gap-1 sm:gap-[0.15vw]">
                                                              <div className=" bg-[#F1F1F1] w-16 h-12 sm:w-[4.2vw] sm:h-[2.5vw] rounded-[0.3vw] flex items-center justify-center">
                                                                  <p className="text-base sm:text-[1.1vw] font-GolosRegular">
                                                                      {amount}
                                                                  </p>
                                                              </div>
                                                              <div className="flex flex-col items-center gap-1 sm:gap-[0.15vw] h-12 sm:h-[2.5vw]">
                                                                  <button className="bg-[#F1F1F1] w-8 sm:w-[1.5vw] font-GolosRegular h-1/2 rounded-[0.2vw] overflow-hidden text-base sm:text-[0.8vw] font-bold">
                                                                      +
                                                                  </button>
                                                                  <button className="bg-[#F1F1F1] w-8 font-GolosRegular sm:w-[1.5vw] h-1/2 rounded-[0.2vw] overflow-hidden text-base sm:text-[0.8vw] font-bold">
                                                                      -
                                                                  </button>
                                                              </div>
                                                          </div>
                                                          <p className="font-GolosRegular text-lg sm:text-[1.3vw]">
                                                             $ {price}
                                                          </p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </>
                                  );
                              }
                          )}
                </div>
                <div className="w-full px-5 sm:px-0">
                    <div className="flex justify-between items-center mt-8 sm:mt-[2vw] px-1 sm:px-[0.5vw]">
                        <h4 className="font-GolosRegular text-lg sm:text-[1.5vw] font-semibold">
                            Subtotal
                        </h4>
                        <h4 className="font-GolosRegular font-bold text-lg sm:text-[1.5vw] tracking-[1px]">
                            $ 120
                        </h4>
                    </div>
                    <button className="hover:bg-[#222020] border-[#222020] border p-5 sm:p-[1.5vw] rounded-full w-full mt-8 sm:mt-[2vw] text-sm sm:text-[0.9vw] font-bold uppercase tracking-[0.2vw] text-center transition-all duration-200 hover:text-white font-GolosRegular">
                        Continue to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
