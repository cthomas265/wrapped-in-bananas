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
    messages(username: String): [Message]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      password: String!
      classCode: String!
    ): Auth
    updateUser(email: String, password: String, username: String): User
    deleteUser(_id: ID): User
    addSignature(imageURL: String): Signature
    addMessage(messageBody: String!): Message
    updateMessage(messageBody: String!, _id: ID!): Message
    deleteMessage( _id: ID!): Message
  }
`;

module.exports = typeDefs;
