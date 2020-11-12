import React, { useState } from 'react';
import { IProductDetails } from 'components/Product';
export interface AppContextInterface {
  [key: string]: any;
}

const AppContext = React.createContext<AppContextInterface | null>(null);
interface IContextProps {
  children: React.ReactNode;
}
export const AppContextProvider = ({ children }: IContextProps) => {
  const [cartItems, setCartItems] = useState<any>([]);
  const getCartItems = () => {
    const items = localStorage.getItem('cartProducts');
    setCartItems(items ? JSON.parse(items) : []);
  };
  const addItemsToCart = (product: IProductDetails) => {
    const itemsInCart = localStorage.getItem('cartProducts');

    if (itemsInCart) {
      if (
        JSON.parse(itemsInCart).some(
          (item: IProductDetails) => item.id === product.id
        )
      ) {
        const updatedCartItems = JSON.parse(itemsInCart).map(
          (item: IProductDetails) => {
            if (item.id === product.id) {
              item.quantity++;
            }
            return item;
          }
        );

        localStorage.setItem('cartProducts', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        return;
      } else {
        const updatedCartItems = [product, ...JSON.parse(itemsInCart)];
        localStorage.setItem('cartProducts', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        return;
      }
    }
    localStorage.setItem('cartProducts', JSON.stringify([product]));
    setCartItems([product]);
  };
  const increaseOrDecreaseCartItem = (itemId: string, action: string) => {
    const itemsInCart = localStorage.getItem('cartProducts');

    if (itemsInCart) {
      const updatedItems: IProductDetails[] = [];
      const itemsInCartArray = JSON.parse(itemsInCart);
      for (var i = 0; i < itemsInCartArray.length; i++) {
        if (itemsInCartArray[i].id === itemId && action === 'increment') {
          itemsInCartArray[i].quantity++;
          updatedItems.push(itemsInCartArray[i]);
        } else if (
          itemsInCartArray[i].id === itemId &&
          action === 'decrement' &&
          itemsInCartArray[i].quantity > 1
        ) {
          itemsInCartArray[i].quantity--;
          updatedItems.push(itemsInCartArray[i]);
        } else if (
          itemsInCartArray[i].id === itemId &&
          action === 'decrement' &&
          itemsInCartArray[i].quantity === 1
        ) {
          continue;
        } else {
          updatedItems.push(itemsInCartArray[i]);
        }
      }

      localStorage.setItem('cartProducts', JSON.stringify(updatedItems));
      setCartItems(updatedItems);
    }
  };
  return (
    <AppContext.Provider
      value={{
        cartItems,
        getCartItems,
        increaseOrDecreaseCartItem,
        addItemsToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
