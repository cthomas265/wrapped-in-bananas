import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $classCode: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      classCode: $classCode
    ) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: ID
    $email: String
    $password: String
    $username: String
  ) {
    updateUser(
      _id: $_id
      email: $email
      password: $password
      username: $username
    ) {
      _id
      username
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($_id: ID) {
    deleteUser(_id: $_id) {
      _id
      username
      email
    }
  }
`;

export const ADD_SIGNATURE = gql`
  mutation addSignature($imageURL: String) {
    addSignature(imageURL: $imageURL) {
      imageURL
    }
  }
`;
