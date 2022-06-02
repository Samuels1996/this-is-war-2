import { gql } from "@apollo/client";

export const FIND_ITEMS = gql`
  query allItems {
    items {
      _id
      category
      name
      description
      price
      hp
      attack
      defense
    }
  }
`;

export const FIND_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      password
      wealth
      characters
      inventory
      wins
      loses
      online
    }
  }
`;
