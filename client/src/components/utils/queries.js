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
