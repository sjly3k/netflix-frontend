import { gql } from 'apollo-boost'

export const LOCAL_LOG_IN = gql`
    mutation logUserIn($token : String!) {
        logUserIn(token : $token) @client
    }
`

export const LOG_IN = gql`
    mutation Login($email: String!, $password: String!) {
        Login(email: $email, password: $password) {
            id
            token
            email
            phoneNumber
            userName
            payment {
                plan
            }
        }
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

export const CONTENT_QUERY = gql`
    {
        showAllContent {
            id
            title
            genres {
                name
            }
            type
            caption
            duration
            actors {
                name
            }
            files {
                url
                type
            }
            likeCount
            createdAt
            is_netflix
            age_limit
        }
    }
`