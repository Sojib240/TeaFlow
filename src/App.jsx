import React, { useContext, useRef, useState } from "react";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
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
import ScrollToTop from "./Components/ScrollToTop";
import SingleJournal from "./Pages/SingleJournal";
import Flows from "./Pages/Flows";
import { productContext } from "./Utils/Context";

const App = () => {
    // context data coming from api
    const [productsApiData] = useContext(productContext);
    const { products } = productsApiData;
    // app states
    const [CartOpenClose, setCartOpenClose] = useState(false);
    const [menuOpenClose, setmenuOpenClose] = useState(false);
    // filter to top sales
    const [newCategoriesData, setnewCategoriesData] = useState();
    const [titleChange, settitleChange] = useState("Products");
    //
    // mouse-follower
    const cursor = useRef(null);
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        gsap.to(cursor.current, {
            x: clientX - 24 / 2,
            y: clientY - 24 / 2,
        });
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
                <Route
                    path="/catagory/:slug"
                    element={
                        <Shop
                            newCategoriesData={newCategoriesData}
                            setnewCategoriesData={setnewCategoriesData}
                            titleChange={titleChange}
                            settitleChange={settitleChange}
                        />
                    }
                />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/flows" element={<Flows />} />
                <Route 
                path="/post/:param"
                 element={<SingleJournal />} />
                <Route
                    path="/product/:param"
                    element={<ProductsDetails />}
                />
                <Route
                    path="/terms-and-conditions"
                    element={<TermsAndConditions />}
                />
            </Routes>
            <Footer />
            <CursorFollower cursor={cursor} />
        </div>
    );
};

export default App;
