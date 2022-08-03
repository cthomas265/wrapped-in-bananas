import { gql } from "@apollo/client";

export const ALL_USERS = gql`
  query users {
    users {
      _id
      username
      email
      classCode
    }
  }
`;

export const USER = gql`
  query user($_id: ID, $username: String, $email: String) {
    user(_id: $_id, username: $username, email: $email) {
      _id
      username
      email
      classCode
      messages {
        _id
        messageBody
        createdAt
      }
    }
  }
`;

export const SIGNATURE = gql`
  query Signatures {
    signatures {
      _id
      imageURL
    }
  }
`;

export const ALL_MESSAGES = gql`
  query messages($username: String) {
    messages(username: $username) {
      _id
      messageBody
      createdAt
      username
    }
  }
`;
