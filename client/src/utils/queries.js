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
      messages{messageBody, messageId, username}
      classCode
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
`
