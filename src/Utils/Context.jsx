import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

const Context = (props) => {
    const [productsApiData, setproductsApiData] = useState([]);
    //
    const callProducts = () => {
        const api =
            "https://teaflows-eed2e-default-rtdb.firebaseio.com/productsData.json";
        axios
            .get(api)
            .then((res) => {
                const formatedValue = Object.values(res.data);
                setproductsApiData(formatedValue[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        callProducts();
    }, []);
    //
    return (
        <productContext.Provider value={[productsApiData, setproductsApiData]}>
            {props.children}
        </productContext.Provider>
    );
};

export default Context;
