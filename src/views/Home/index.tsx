import React from 'react';
import Select from 'components/Select';
import Product from 'components/Product';
import CartItem from 'components/CartItem';
import './index.scss';
const arrays = [1, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
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
        {arrays.map(() => {
          return <Product />;
        })}
      </div>
      {/* test cart item */}
      <div>
        <CartItem />
      </div>
    </div>
  );
}
