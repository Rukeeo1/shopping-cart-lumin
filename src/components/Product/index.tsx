import React from 'react';
import './index.scss';
import Button from 'components/Button';

const url =
  'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png';


export default function Product() {
  return (
    <div className="product">
      <div className="product__image-wrap">
        <img src={url} alt="product" />
      </div>
      <h1>Age Mangement Collection</h1>
      <p className="product__price">From $48.00</p>
      <Button textContent="Add to Cart" buttonStyle="btn btn--default" />
    </div>
  );
}
