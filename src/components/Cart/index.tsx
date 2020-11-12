import React, { useContext, useEffect } from 'react';
import './index.scss';
import backButton from 'assets/svgs/back-button.svg';
import Select from 'components/Select';
import CartItem from 'components/CartItem';
import AppContext from 'context';
import { IProductDetails } from 'components/Product';
import Button from 'components/Button';
import { sumCartItems } from 'helpers';
import { getSymbolFromCurrency } from 'helpers';

type Ref = HTMLDivElement;
type currency = String;
type Props = {
  children: React.ReactNode;
  currencies: currency[];
  handleCurrencyChange: React.FormEvent<HTMLInputElement>;
  [key: string]: any;
};

const Cart = React.forwardRef<Ref, Props>((props, ref) => {
  const appContext = useContext(AppContext);
  useEffect(() => {
    appContext?.getCartItems();
  }, []);

  const {
    handleClick,
    currencies,
    defaultCurrency,
    handleCurrencyChange,
  } = props;
  const subTotalOfCartIrems = sumCartItems(appContext?.cartItems);

  return (
    <div className="cart" ref={ref} id="cart">
      <div className="cart__items-list">
        <img
          src={backButton}
          alt="back-button"
          role="button"
          onClick={handleClick}
          className="back-btn"
        />
        <div className="cart__items-list__header">
          <h1>your cart</h1>
          <div className="cart__select-dropdown">
            <Select onChange={handleCurrencyChange}>
              <option>{defaultCurrency}</option>
              {currencies?.map((currency, index) => (
                <option key={index}>{currency}</option>
              ))}
            </Select>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
        <div className="cart__items-list__body">
          <div className="cart__product-list__items">
            {appContext?.cartItems.map((cartItem: IProductDetails) => (
              <CartItem
                product={cartItem}
                key={cartItem?.id}
                defaultCurrency={defaultCurrency}
              />
            ))}
          </div>
          <CartFooter
            subTotal={subTotalOfCartIrems}
            defaultCurrency={defaultCurrency}
          />
        </div>
      </div>
    </div>
  );
});

interface ICartFooter {
  subTotal: Number;
  defaultCurrency: string;
}

const CartFooter = ({ subTotal, defaultCurrency }: ICartFooter) => (
  <div className="cart__footer">
    <hr />
    <div className="d-flex justify-content-between">
      <span>Subtotal</span>
      <span>
        {getSymbolFromCurrency(defaultCurrency) || defaultCurrency} {subTotal}
      </span>
    </div>
    <Button
      textContent="MAKE THIS A SUBSCRIPTION SAVE (20%)"
      buttonStyle="btn--secondary mt-3"
    />
    <Button
      textContent="PROCEED TO CHECKOUT (20%)"
      buttonStyle="btn--default mt-3"
    />
  </div>
);

export default Cart;
