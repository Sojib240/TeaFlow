import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Journal from "./Pages/Journal";
import AboutUs from "./Pages/AboutUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Returns from "./Pages/Returns";
import TermsAndConditions from "./Pages/TermsAndConditions";
import CursorFollower from "./Components/CursorFollower";
import Delivery from "./Pages/Delivery";
import ProductsDetails from "./Pages/ProductsDetails";
import gsap from "gsap";
import ScrollToTop from "./Common/ScrollToTop";
import SingleJournal from "./Components/SingleJournal";
import Flow from "./Pages/Flow";
import CartPage from "./Pages/CartPage";

const App = () => {
    // app states
    const [CartOpenClose, setCartOpenClose] = useState(false);
    const [menuOpenClose, setmenuOpenClose] = useState(false);
    // mouse-follower
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        let mm = gsap.matchMedia();
        mm.add(
            {
                isMobile: "(min-width:640px)",
            },
            (Context) => {
                let { isMobile } = Context.conditions;

                gsap.to("#mouse", {
                    ease: "power2.out",
                    x: isMobile ? clientX - 24 / 2 : null,
                    y: isMobile ? clientY - 24 / 2 : null,
                    opacity: isMobile ? 1 : 0,
                });
            }
        );
    };

    return (
        <div onMouseMove={(e) => handleMouseMove(e)}>
            <div className="pb-20 sm:pb-[6vw]">
                <ScrollToTop />
                <Navbar
                    CartOpenClose={CartOpenClose}
                    setCartOpenClose={setCartOpenClose}
                    menuOpenClose={menuOpenClose}
                    setmenuOpenClose={setmenuOpenClose}
                />
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/flows" element={<Flow />} />
                <Route path="/singleJournal/:id" element={<SingleJournal />} />
                <Route
                    path="/productsDetails/:id"
                    element={<ProductsDetails />}
                />
                <Route
                    path="/TermsAndConditions"
                    element={<TermsAndConditions />}
                />
            </Routes>
            <Footer />
            <CursorFollower />
        </div>
    );
};

export default App;
