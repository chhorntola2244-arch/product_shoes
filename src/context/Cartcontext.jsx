import { createContext, useContext, useState } from "react";
//add to cart
const CartContext = createContext();
//add to cart
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addTocart = (product) => {
        setCart((prevCart) => {
            const exitingProduct = prevCart.find((item) => item.id == product.id);
            if (exitingProduct) {
                return prevCart.map((item) =>

                    item.id == product.id
                        ? {
                            ...item, quantity: item.quantity + 1
                        }
                        : item
                );
            }
            return [
                ...prevCart,
                {
                    ...product,
                    quantity: 1
                }
            ]
        })
    }


    //up or down qty
    const increment = (id) => {

        setCart((prevcart) =>
            prevcart.map((item) =>
                item.id == id ? { ...item, quantity: item.quantity + 1 } : item));
    }
    const decrement = (id) => {
        setCart((prevcart) =>
            prevcart.map((item) =>
                item.id == id ? { ...item, quantity: item.quantity - 1 } : item).filter((item)=>item.quantity>=0));


    }
    //remove product
    const removecart=(id)=>{
        setCart((prevcart)=>prevcart.filter((item)=>item.id !==id))
    }




    return <CartContext.Provider value={{ cart, setCart, addTocart, increment, decrement,removecart }}>
        {children}

    </CartContext.Provider>

}
export function useCart() {
    return useContext(CartContext)
}