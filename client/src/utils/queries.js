import { gql } from "@apollo/client";

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
  }
`;

export const QUERY_USER = gql`
query user($id: String) {
  user(_id: $id) {
    _id
    username
    wealth
    characters {
      _id
      name
      equipment {
        hp
        attack
        defense
        _id
        category
      }
      hp
      attack
      defense
      exp
      active
    }
    inventory {
      name
      hp
      attack
      defense
      _id
      category
    }
    wins
    loses
    online
  }
}
`;

export const QUERY_ITEMS = gql`
  query allItems {
    item {
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
