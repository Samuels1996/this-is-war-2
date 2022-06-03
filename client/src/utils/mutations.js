import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        password
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        password
      }
    }
  }
`;
 export const ADD_ITEM = gql`
 mutation AddItem($userId: ID!, $itemId: ID!) {
  addItem(userId: $userId, itemId: $itemId) {
    _id
    inventory {
      _id
    }
  }
}
`;
