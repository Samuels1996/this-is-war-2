import { gql } from '@apollo/client';

export const ITEM_QUERY = gql`
    query getItems {
        Item {
            _id: ID!
            category: String!
            name: String!
            description: String!
            price: Int
            hp: Int
            attack: Int
            defense: Int
          }
    }`;