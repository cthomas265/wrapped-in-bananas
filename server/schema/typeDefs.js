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
    messageBody: String
    username: String
    messageId: ID
  }

  type Auth {
    token: String!
    user: User
  }

  input messageInput {
    messageBody: String
    username: String
    messageId: ID
  } 

  type Query {
    users: [User]
    user(_id: ID, username: String, email: String): User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, classCode: String!): Auth
    updateUser(_id: ID, email: String, password: String, username: String): User
    deleteUser(_id: ID): User
    savedMessage(messageData: messageInput): User
  }


`;

module.exports = typeDefs;
