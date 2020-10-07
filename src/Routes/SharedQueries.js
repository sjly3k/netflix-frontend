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
            isLiked,
            likeCount,
            createdAt,
            is_netflix,
            age_limit,
        }
    }
`