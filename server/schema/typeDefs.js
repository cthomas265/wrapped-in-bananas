const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    classCode: String
    messages: [Message]
  }

  type Message { 
    _id: ID
    messageBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: String!
    user: User
  }

  type Signature {
    _id: ID
    imageURL: String
  }

  type Query {
    users: [User]
    user(_id: ID, username: String, email: String): User
    signatures: [Signature]
    signature(_id: ID, imageURL: String): Signature
    messages(username: String): [Message]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, classCode: String!): Auth
    updateUser(_id: ID, email: String, password: String, username: String): User
    deleteUser(_id: ID): User
    addSignature(imageURL: String): Signature
    addMessage(messageBody: String!): Message
  }


`;

module.exports = typeDefs;
