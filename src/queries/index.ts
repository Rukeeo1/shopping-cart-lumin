import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query Products($currency: Currency!) {
    products {
      id
      title
      image_url
      price(currency: $currency)
      product_options {
        title
        prefix
      }
    }
  }
`;

export const GET_CURRENCIES = gql`
  query {
    currency
  }
`;
