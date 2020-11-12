import React, { useRef, useState, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS, GET_CURRENCIES } from 'queries';
import Select from 'components/Select';
import Product, { IProductDetails } from 'components/Product';
import { objectsAreSame, getSymbolFromCurrency } from 'helpers';
import AppContext from 'context';
import Cart from 'components/Cart';
import Loader from 'components/Loader';

import './index.scss';

export default function Home() {
  const [currency, setCurrency] = useState('AMD');
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { currency },
    onCompleted: (data) => {
      if (!objectsAreSame(data?.products, products)) {
        const updatedCartItemsPrices = appContext?.cartItems.map(
          (cartItem: IProductDetails) => {
            const findCartItemInNewProductsArray = data?.products.find(
              (item: IProductDetails) => item.id === cartItem.id
            );
            return {
              ...cartItem,
              price: findCartItemInNewProductsArray.price,
            };
          }
        );

        appContext?.updateCartItems(updatedCartItemsPrices);
        setProducts(data?.products);
      }
    },
  });

  const {
    loading: loadingCurrency,
    error: errorGettingCurrent,
    data: currencyData,
  } = useQuery(GET_CURRENCIES);

  const cartRef = useRef<HTMLDivElement>(null);
  const toggleSidebar = () => cartRef?.current?.classList.toggle('cart-closed');

  const appContext = useContext(AppContext);

  const handleCurrencyChange = (e: any) => {
    localStorage.setItem('selectedCurrency', e.target.value);
    setCurrency(e.target.value);
  };
  const isLoading = loading || loadingCurrency;
  const errorOccurred = error || errorGettingCurrent;
  

  return (
    <div className="home">
      <div className="home__header">
        <div>
          <h1>All Products</h1>
          <p>A 360 look at Lumin</p>
        </div>
        <Select wrapperDiv="home__select">
          <option>Filter by</option>
          <option>Filter by</option>
          <option>Filter by</option>
          <option>Filter by</option>
        </Select>
      </div>
      <div className="home__body">
        {isLoading ? (
          <Loader />
        ) : error || errorGettingCurrent ? (
          <div>Error Occured: {errorOccurred?.message}</div>
        ) : (
          data?.products?.map((product: IProductDetails) => (
            <Product
              toggleSidebar={toggleSidebar}
              product={product}
              selectedCurrency={getSymbolFromCurrency(currency) || currency}
              key={product.id}
            />
          ))
        )}
      </div>
      <Cart
        ref={cartRef}
        handleClick={toggleSidebar}
        currencies={currencyData?.currency}
        defaultCurrency={getSymbolFromCurrency(currency) || currency}
        handleCurrencyChange={handleCurrencyChange}
      />
    </div>
  );
}
