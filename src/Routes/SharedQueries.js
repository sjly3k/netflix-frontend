import {gql} from "apollo-boost";

export const IS_LOGGED_IN_QUERY = gql`
    {
        isLoggedIn @client
    }
`;

export const CONTENT_QUERY = gql`
    {
        showAllContent {
            id,
            title,
            genres {
                name
            },
            type,
            caption,
            duration,
            actors {
                name
            },
            files {
                url
                type
            },
            likeCount,
            createdAt,
            is_netflix,
            age_limit,
        }
    }
`

export const CONTENT_QUERY_WITH_ISLIKED = gql`
    {
        showAllContent {
            id,
            title,
            genres {
                name
            },
            type,
            caption,
            duration,
            actors {
                name
            },
            files {
                url
                type
            },
            likeCount,
            isLiked,
            createdAt,
            is_netflix,
            age_limit,
        }
    }
`

export const ME_QUERY = gql`
    {
        me {
            id,
            avatar,
            userName,
            email,
            phoneNumber,
            password,
            likes {
                id
            }
            payment {
                plan
            },
            createdAt,
            updatedAt,
        }
    }
`