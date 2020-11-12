import React, { useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS, GET_CURRENCIES } from 'queries';
import Select from 'components/Select';
import Product, { IProductDetails } from 'components/Product';
import Cart from 'components/Cart';

import './index.scss';

export default function Home() {
  const [currency, setCurrency] = useState('AMD');
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { currency },
  });

  const {
    loading: loadingCurrency,
    error: errorGettingCurrent,
    data: currencyData,
  } = useQuery(GET_CURRENCIES);
  console.log(data, 'this is');

  const cartRef = useRef<HTMLDivElement>(null);
  const toggleSidebar = () => cartRef?.current?.classList.toggle('cart-closed');

  const handleCurrencyChange = (e: any) => {
    setCurrency(e.target.value);
  };

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
        {data?.products?.map((product: IProductDetails) => (
          <Product
            toggleSidebar={toggleSidebar}
            product={product}
            selectedCurrency={currency}
          />
        ))}
      </div>
      <Cart
        ref={cartRef}
        handleClick={toggleSidebar}
        currencies={currencyData?.currency}
        defaultCurrency={currency}
        handleCurrencyChange={handleCurrencyChange}
      />
    </div>
  );
}
