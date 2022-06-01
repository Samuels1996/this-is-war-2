import { gql } from '@apollo/client';

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