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

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
        $email: String!
        $phoneNumber: String!
        $password: String!
        $likedContents: [String!]
    ) {
        createAccount(
            email: $email,
            phoneNumber: $phoneNumber,
            password: $password,
            likedContents: $likedContents
        )
    }
`