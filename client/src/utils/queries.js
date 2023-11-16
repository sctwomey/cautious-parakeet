import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query Products {
  products {
    image
    title
    artist
    price
    quantity
    genre {
      _id
    }
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      title
      description
      price
      quantity
      genre {
        name
      }
    }
  }
`;

export const QUERY_GENRES = gql`
  {
    genres {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      userName
      orders {
        _id
        purchaseDate
        products {
          _id
          title
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
