import { gql } from '@apollo/client';

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
    }
`;
