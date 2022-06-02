import { gql } from "@apollo/client";

export const ITEM_QUERY = gql`
    query getItems {
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
    }`;

export const QUERY_USERS = gql`
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
<<<<<<< HEAD
=======
  }
`;
export const QUERY_ITEMS = gql`
  query allItems {
    items {
      category
      name
      description
      price
      hp
      attack
      defense
    }
  }
>>>>>>> 0325a4af2fb3d67eb8012818cd37928b3be7a268
`;
