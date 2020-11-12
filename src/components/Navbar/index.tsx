import React, { useContext } from 'react';
import AppContext from 'context';
import './index.scss';

export default function Navbar() {
  const appContext = useContext(AppContext);
  const handleOpenCart = () =>
    document.getElementById('cart')?.classList.toggle('cart-closed');

  return (
    <nav className="nav-bar">
      <div className="nav-bar__brand">
        <h1>lumin</h1>
        <ul className="nav-bar__shoping">
          <li>Shop</li>
          <li>Learn</li>
        </ul>
      </div>
      <div className="nav-bar__cart">
        <ul>
          <li>Account</li>
          <li onClick={handleOpenCart}>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="item-num">{appContext?.cartItems.length}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
