import React from 'react';
import './index.scss';

export default function Navbar() {
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
          <li>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="item-num">4</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
