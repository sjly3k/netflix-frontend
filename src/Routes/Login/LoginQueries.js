import { gql } from 'apollo-boost'

export const LOCAL_LOG_IN = gql`
    mutation logUserIn($token : String!) {
        logUserIn(token : $token) @client
    }
`

export const LOG_IN = gql`
    mutation Login($email: String!, $password: String!) {
        Login(email: $email, password: $password)
    }
`;