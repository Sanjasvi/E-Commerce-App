import { createContext, useState } from "react";

export let CartContext = createContext();

export function CartProvider( props ) {
    let [cart, setCart] = useState([]);
    return(
        <CartContext.Provider value={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    );
}