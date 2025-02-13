import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Journal from "./Pages/Journal";
import AboutUs from "./Pages/AboutUs";
import CartPage from "./Pages/CartPage";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Returns from "./Pages/Returns";
import TermsAndConditions from "./Pages/TermsAndConditions";
import CursorFollower from "./Components/CursorFollower";

const App = () => {
    const [CartOpenClose, setCartOpenClose] = useState(false);
    return (
        <>
            <Navbar
                CartOpenClose={CartOpenClose}
                setCartOpenClose={setCartOpenClose}
            />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/returns" element={<Returns />} />
                <Route
                    path="/TermsAndConditions"
                    element={<TermsAndConditions />}
                />
            </Routes>
            <Footer />
            {/* <CursorFollower /> */}
        </>
    );
};

export default App;
