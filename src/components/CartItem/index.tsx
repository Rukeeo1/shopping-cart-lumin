import React from 'react';
import './index.scss';

const url =
  'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png'

export default function CartItem() {
  return (
    <div className="cart-item">
      <div className="d-flex flex-column justify-content-between cart-item__title-wrapper">
        <h1>Dark Circle Defense</h1>
        <div className="d-flex justify-content-between  align-items-center">
          <div className="cart-item__controls">
            <i className="fa fa-minus mr-2" aria-hidden="true" onClick={() => {}}></i>
            <span>1</span>
            <i className="fa fa-plus ml-2" aria-hidden="true" onClick={() => {}}></i>
          </div>
          <p className="mb-0 cart-item__price">$29.00</p>
        </div>
      </div>

      <div className="cart-item__image-wrapper">
        <img src={url}  alt="ruke"/>
      </div>
    </div>
  );
}
