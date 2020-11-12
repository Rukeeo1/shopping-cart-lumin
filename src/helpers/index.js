import getSymbolFromCurrency from 'currency-symbol-map';

/**
 * couldn't find typings for getSymbolFromCurrency,
 * not sure it has typescript support yet. so for convenience i opted to use a normal js file
 */
export { getSymbolFromCurrency };

export const sumCartItems = (cartItems) => {
  return cartItems.reduce(function (accumlator, cartItem) {
    const totalPriceOfIndividualItem = cartItem.price * cartItem.quantity;
    return accumlator + totalPriceOfIndividualItem;
  }, 0);
};

export const  objectsAreSame = (x, y) => {
  var objectsAreSame = true;
  for(var propertyName in x) {
     if(x[propertyName] !== y[propertyName]) {
        objectsAreSame = false;
        break;
     }
  }
  return objectsAreSame;
}