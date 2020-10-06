import {gql} from "apollo-boost";

export const SEE_FULL_CONTENT = gql`
    query seeFullContent (
        $id : String!
    ) {
        seeFullContent (id : $id) {
            id
            title
            duration
            genres {
                name
            }
            type
            caption
            episodes {
                id
                season
                sequence
                title
                caption
                duration
            }
            actors {
                name
            }
            files {
                url
                type
            }
            is_netflix
            age_limit
            createdAt
        }
    }
`