import React, { useContext } from 'react';
import { IProductDetails } from 'components/Product';
import AppContext from 'context';
import './index.scss';

interface ICartItem {
  product: IProductDetails;
  defaultCurrency: string;
}

export default function CartItem({ product, defaultCurrency }: ICartItem) {
  const { title, price, image_url, quantity, id } = product;
  const context = useContext(AppContext);

  return (
    <div className="cart-item mb-3 mt-3">
      <span onClick={() => context?.removeItemFromCart(id)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </span>
      <div className="d-flex flex-column justify-content-between cart-item__title-wrapper">
        <h1>{title}</h1>
        <div className="d-flex justify-content-between  align-items-center">
          <div className="cart-item__controls">
            <span
              onClick={() =>
                context?.increaseOrDecreaseCartItem(id, 'decrement')
              }
            >
              <i className="fa fa-minus mr-2" aria-hidden="true"></i>
            </span>
            <span>{quantity}</span>
            <span
              onClick={() =>
                context?.increaseOrDecreaseCartItem(id, 'increment')
              }
            >
              <i className="fa fa-plus ml-2" aria-hidden="true"></i>
            </span>
          </div>
          <p className="mb-0 cart-item__price">
            {defaultCurrency} {price}
          </p>
        </div>
      </div>

      <div className="cart-item__image-wrapper">
        <img src={image_url} alt={title} />
      </div>
    </div>
  );
}
