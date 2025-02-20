import React from "react";
import FollowUs from "../Common/FollowUs";
import Discount from "../Common/Discount";
import Title from "../Common/Title";
import JournalComponent from "../Common/JournalComponent";

const AboutUs = () => {
    document.title = "ABOUT US － TEAFLOW";
    return (
        <>
            <Title text={"about us"} />
            <div className="px-5 sm:px-[5.15vw] mx-auto bg-[#222020] mt-24 sm:mt-[14vw] font-GolosRegular">
                <div className="flex gap-[4vw] flex-col sm:flex-row items-end">
                    <div className="overflow-hidden rounded-[50px] w-full sm:w-[65%] mt-[-8vw]">
                        <img
                            className="flex object-cover w-full"
                            src="/Images/6765d66f89f7f0b8ec80667b_about-us-pic1-min-p-1080.jpg"
                            alt=""
                        />
                    </div>
                    <div className="w-full sm:w-[35%]">
                        <h4 className="text-lg sm:text-[1.1vw] leading-[150%] sm:leading-[2vw] text-white">
                            At Tea Flow, we're committed to bringing you the
                            highest quality teas while also staying true to our
                            values of sustainability, fairness, and
                            transparency. We carefully source our teas from
                            organic and fair trade farms around the world,
                            ensuring that every cup you enjoy supports healthy,
                            vibrant communities.
                        </h4>
                        <h2 className="text-2xl leading-[150%] sm:text-[2vw] uppercase sm:leading-[2.6vw] mt-[5vw] text-white">
                            tea is more than just a beverage - it's an
                            experience that connects us to ourselves, each
                            other, and the world around us.
                        </h2>
                    </div>
                </div>
                {/*  */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end gap-[6vw] mt-[15vw] px-0 sm:px-[9.73vw] pb-[5vw]">
                    <div className="w-full sm:w-[60%] pb-[5vw]">
                        <h4 className="text-lg sm:text-[1.1vw] leading-[150%] sm:leading-[2vw] text-white">
                            We believe that tea is more than just a beverage -
                            it's an experience that connects us to ourselves,
                            each other, and the world around us. That's why
                            we're passionate about bringing you the
                            best-tasting, highest-quality teas that reflect the
                            unique flavors and cultures of their origins.
                        </h4>
                        <h4 className="text-lg sm:text-[1.1vw] leading-[150%] sm:leading-[2vw] text-white mt-6 sm:mt-[2vw]">
                            Transparency and quality are at the heart of
                            everything we do. We're proud to say that we taste
                            and test every tea we offer, ensuring that only the
                            finest teas make it into our collections. We're
                            committed to making a positive impact on the world -
                            with every purchase of our tea, you're helping to
                            support sustainable and eco-friendly practices.{" "}
                            <br /> Join us on this journey to discover the
                            incredible world of tea and to make a positive
                            impact on the world around us. Explore our selection
                            of delicious and sustainable teas today!
                        </h4>
                    </div>
                    <div className="w-[60%] sm:w-[40%] mb-[-10vw]">
                        <img
                            className="flex object-cover w-full h-full"
                            src="/Images/6765d66f89f7f0b8ec80666b_about-us-pic2-min-p-500.jpg"
                            alt=""
                        />
                    </div>
                </div>
                {/*  */}
            </div>
            <div className="px-5 sm:px-[5.15vw] mx-auto">
                <div className="px-0 sm:px-[9.73vw]">
                    <div className="flex flex-col sm:flex-row gap-[6vw] items-end pt-[20vw]">
                        <div className="w-full sm:w-[42%]">
                            <img
                                className="flex object-cover w-full"
                                src="/Images/6765d66f89f7f0b8ec806681_about-us-pic3-min.jpg"
                                alt=""
                            />
                        </div>
                        <div className="w-full sm:w-[58%]">
                            <h2 className="text-2xl leading-[150%] sm:text-[2vw] uppercase sm:leading-[2.4vw] mt-[5vw] mb-6 sm:mb-[3vw]">
                                Another mission of our brand is to make the
                                world a cleaner place!
                            </h2>
                            <div className="text-lg sm:text-[1.1vw] leading-[150%] sm:leading-[2vw] flex flex-col gap-6 sm:gap-[1.1vw]">
                                <span>
                                    At Tea Flow, we believe it's our
                                    responsibility to make the world cleaner and
                                    healthier for everyone. That's why we're
                                    proud to introduce our newest initiative -
                                    every time you buy our premium tea, you help
                                    clean the ocean of plastic!
                                </span>
                                <span>
                                    We know that plastic pollution is a huge
                                    problem in our oceans, so we've partnered
                                    with 4ocean - a company dedicated to
                                    cleaning up our oceans and beaches. For
                                    every purchase you make, we invest a
                                    percentage of our profits into 4ocean's
                                    incredible efforts to remove plastic waste
                                    from our oceans.
                                </span>
                                <span>
                                    So not only will you enjoy our delicious
                                    teas, but you'll also be making a tangible
                                    difference in the fight against plastic
                                    pollution. With your help, we can create a
                                    cleaner, healthier world for generations to
                                    come. Join us on this mission to make a
                                    positive impact - one cup of tea at a time!
                                </span>
                                <button className="flex gap-2 sm:gap-[1vw] mt-6 sm:mt-[1.2vw] items-center cursor-pointer group">
                                    <span className="text-[12px] sm:text-[0.9vw] uppercase font-GolosDemiBold tracking-[0.2vw]">
                                        watch catalog
                                    </span>
                                    <span className="block w-10 sm:w-[4vw] group-hover:translate-x-[1.2vw] transition-all duration-300">
                                        <img
                                            className="w-full"
                                            src="/Images/Btn-icon.svg"
                                            alt=""
                                        />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 sm:mt-[3vw]">
                <JournalComponent />
            </div>
            <div className="mt-[13vw]">
                <Discount />
            </div>
            <div className="mt-[18vw]">
                <FollowUs />
            </div>
        </>
    );
};

export default AboutUs;
