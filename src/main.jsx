import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Context from "./Utils/Context.jsx";
import CartContext from "./Utils/CartContext.jsx";

createRoot(document.getElementById("root")).render(
    <CartContext>
        <Context>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
        </Context>
    </CartContext>
);
