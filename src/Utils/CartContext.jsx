import React, { createContext, useState } from "react";

export const cartContextData = createContext();

const CartContext = (props) => {
    const [cart, setcart] = useState([]);
    return (
        <cartContextData.Provider value={[cart, setcart]}>
            {props.children}
        </cartContextData.Provider>
    );
};

export default CartContext;
