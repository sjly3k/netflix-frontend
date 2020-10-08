import {gql} from "apollo-boost";

export const CREATE_CONTENT = gql`
    mutation createContent(
        $title : String!,
        $caption : String!,
        $genres : [GenreType!],
        $actors : [String!],
        $type : ContentType!,
        $files : [FileInput!],
        $is_netflix : Boolean!,
        $age_limit : AgeLimitType!,
        $duration : Int
    ) createContent {
        title : $title,
        caption : String!,
        genres : [GenreType!],
        actors : [String!],
        type : ContentType!,
        files : [FileInput!],
        is_netflix : Boolean!,
        age_limit : AgeLimitType!,
        duration : Int
    }
`