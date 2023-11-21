const typeDefs = `
  type Genre {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    title: String
    artist: String
    image: String
    quantity: Int
    price: Float
    description: String
    genre: Genre
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    userName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input ProductInput {
    _id: ID
    purchaseQuantity: Int
    title: String
    artist: String
    image: String
    price: Float
    quantity: Int
  }

  type Query {
    genres: [Genre]
    products: [Product]
    product(_id: ID!): Product
    getArtist(artist: String!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(userName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
