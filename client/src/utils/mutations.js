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

export const CREATE_CHARACTER = gql`
  mutation createCharacter($name: String!, $classType: String!) {
    createCharacter(name: $name, classType: $classType) {
      _id
    }
  }
`;

export const ADD_CHARACTER_TO_USER = gql`
  mutation addCharacterToUser(
    $userId: ID!
    $name: String!
    $classType: String!
  ) {
    addCharacterToUser(userId: $userId, name: $name, classType: $classType) {
      user {
        userId
        characters {
          name
          classType
        }
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
