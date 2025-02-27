import React, { useContext, useRef, useState } from "react";
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
import SingleJournal from "./Pages/SingleJournal";
import CheckOut from "./Pages/CheckOut";
import { productContext } from "./Utils/Context";
import Flows from "./Pages/Flows";

const App = () => {
    // context data coming from api
    const [productsApiData, setproductsApiData] = useContext(productContext);
    // app states
    const [CartOpenClose, setCartOpenClose] = useState(false);
    const [menuOpenClose, setmenuOpenClose] = useState(false);
    // filter to top sales
    const { products } = productsApiData;
    const [newCategoriesData, setnewCategoriesData] = useState();
    const [titleChange, settitleChange] = useState("Products");
    // main categories filter
    const handleCategoriesFilter = (id, categoryName) => {
        settitleChange(categoryName);
        const filter = products.filter((p) => {
            if (Array.isArray(p.category)) {
                return p.category.includes(id);
            }
            return p.category === id;
        });
        setnewCategoriesData(filter);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    // sub-categories Filter
    const handleSubCategoriesFilter = (id, categoryName) => {
        settitleChange(categoryName);
        const filter = products.filter((p) => {
            if (Array.isArray(p.subCategory)) {
                return p.subCategory.includes(id);
            }
            return p.subCategory === id;
        });
        setnewCategoriesData(filter);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
        // flows categories Filter
        const handleFlowsCategoriesFilter = (id, categoryName) => {
            settitleChange(categoryName);
            const filter = products.filter((p) => {
                if (Array.isArray(p.flow)) {
                    return p.flow.includes(id);
                }
                return p.flow === id;
            });
            setnewCategoriesData(filter);
    
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };
    // mouse-follower
    const cursor = useRef(null);
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        let mm = gsap.matchMedia();
        mm.add(
            {
                isMobile: "(min-width:640px)",
            },
            (Context) => {
                let { isMobile } = Context.conditions;

                gsap.to(cursor.current, {
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
                    handleCategoriesFilter={handleCategoriesFilter}
                />
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            handleCategoriesFilter={handleCategoriesFilter}
                            handleFlowsCategoriesFilter={handleFlowsCategoriesFilter}
                        />
                    }
                />
                <Route
                    path="/shop"
                    element={
                        <Shop
                            newCategoriesData={newCategoriesData}
                            setnewCategoriesData={setnewCategoriesData}
                            titleChange={titleChange}
                            settitleChange={settitleChange}
                            handleCategoriesFilter={handleCategoriesFilter}
                            handleSubCategoriesFilter={
                                handleSubCategoriesFilter
                            }
                        />
                    }
                />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/flows" element={<Flows handleFlowsCategoriesFilter={handleFlowsCategoriesFilter} />} />
                <Route path="/singleJournal/:id" element={<SingleJournal />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route
                    path="/productsDetails/:id"
                    element={<ProductsDetails titleChange={titleChange} settitleChange={settitleChange} />}
                />
                <Route
                    path="/TermsAndConditions"
                    element={<TermsAndConditions />}
                />
            </Routes>
            <Footer handleCategoriesFilter={handleCategoriesFilter} />
            <CursorFollower cursor={cursor} />
        </div>
    );
};

export default App;
