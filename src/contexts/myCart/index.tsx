import React, { createContext, useState } from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cartItems: Product[];
  getArray: () => Array<Product>;
  getNumberOfItems: () => number;
  removeAllItensFromCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
};

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const getArray = () => {
    return cartItems;
  };

  const getNumberOfItems = () => {
    let numberOfItems = 0;
    cartItems.forEach((item: Product) => {
      numberOfItems += item.quantity;
    });
    return numberOfItems;
  }

  const addToCart = (product: Product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      cartItems.forEach((item) => {
        if (item.id === existingProduct.id) {
          item.quantity++;
        }
      });

      const auxCartItems = cartItems;
      setCartItems((prevItems) => [
        ...prevItems,
        { id: 0, name: "none", price: 0, quantity: 0, image: "none" },
      ]);
      setTimeout(() => {
        setCartItems(auxCartItems);
      }, 50);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeAllItensFromCart = () => {
    setCartItems([])
  }

  const removeFromCart = (productId: number) => {
    let index = 9999;

    cartItems.forEach((item) => {
      if (item.id === productId) {
        item.quantity--;

        if (item.quantity == 0) {
          index = cartItems.indexOf(item);
        }
      }
    });

    if (index !== 9999) {
      cartItems.splice(index, 1);
    }
    setCartItems(cartItems);
  };

  const contextValue: CartContextType = {
    cartItems,
    getNumberOfItems,
    getArray,
    addToCart,
    removeAllItensFromCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

interface CartProviderProps {
  children: React.ReactNode;
}
