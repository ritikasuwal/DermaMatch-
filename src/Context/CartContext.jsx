import React, { createContext, useEffect, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const cartStorage = localStorage.getItem("cart");

    return cartStorage ? JSON.parse(cartStorage) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exits = prev.find((item) => item.name == product.name);
      if (exits) {
        return prev.map((item) =>
          item.name == product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }else{
        return [...prev,{...product,quantity:1}];
      }
    });
  };
  const removeFromCart= (productName) => {
    setCartItems((prev) => prev.filter((item) => item.name !== productName))
  }
  const clearCart = () => setCartItems([])
  
  return (<CartContext.Provider value={{cartItems,addToCart,removeFromCart,clearCart}}>
  {children}
  </CartContext.Provider>);
};
