import { gql } from '@apollo/client';

<<<<<<< HEAD
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
=======
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
>>>>>>> f73b74cfa1fe871643ee4609a2fa5a1be078685b
