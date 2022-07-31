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
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
    }
  }
`;

export const SIGNATURE = gql`
query signature {
  signature {
    _id
    imageURL
  }
} 
`

export const ALL_MESSAGES = gql`
  query messages($username: String) {
    messages(username: $username) {
      _id
      messageBody
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const MESSAGE = gql`
  query message($id: ID!) {
    message(_id: $id) {
      _id
      messageBody
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;
