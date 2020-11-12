import React, { useContext } from 'react';
import './index.scss';
import Button from 'components/Button';
import AppContext from 'context';

export interface IProductDetails {
  id: number;
  image_url: string;
  price: number;
  title: string;
  [key: string]: any;
}
interface IProduct {
  toggleSidebar: Function;
  product: IProductDetails;
  selectedCurrency: String;
}

export default function Product({
  toggleSidebar,
  product: { title, image_url, price, id },
  selectedCurrency,
}: IProduct) {
  const appContext = useContext(AppContext);

  const addToCart = () => {
    const newProduct = { id, title, image_url, price, quantity: 1 };
    appContext?.addItemsToCart(newProduct);
    toggleSidebar();
  };

  return (
    <div className="product">
      <div className="product__image-wrap">
        <img src={image_url} alt={title} />
      </div>
      <h1>{title}</h1>
      <p className="product__price">
        From {selectedCurrency} {price}
      </p>
      <Button
        textContent="Add to Cart"
        buttonStyle="btn btn--default"
        handleClick={() => addToCart()}
      />
    </div>
  );
}
