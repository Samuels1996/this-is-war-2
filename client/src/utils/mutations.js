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
      character {
        name
        classType
      }
    }
  }
`;

export const ADD_CHARACTER_TO_USER = gql`
  mutation addCharacterToUser($userId: ID!, $character: character) {
    addCharacterToUser(userId: $userId, character: $character) {
      user {
        userId
        characters {
          character
        }
      }
    }
  }
`;
