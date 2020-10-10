import React from "react";
import {useQuery} from "react-apollo-hooks";
import {CONTENT_QUERY, IS_LOGGED_IN_QUERY} from "../SharedQueries";
import ContentPresenter from "./ContentPresenter";

export default () => {
    const {
        data : { isLoggedIn }
    } = useQuery(IS_LOGGED_IN_QUERY)

    const { data, loading } = useQuery(CONTENT_QUERY)

    const returnMovies = (contents) => {
        return contents.filter(content => content.type === "MOVIE")
    }

    const returnTvShows = (contents) => {
        return contents.filter(content => content.type === "TV_SHOW")
    }

    const returnNetflixSeries = (contents) => {
        return contents.filter(content => content.is_netflix === true)
    }

    const randomNumber = (returnedData) => {
        return Math.floor(Math.random() * returnedData.showAllContent.length)
    }

    return (
        <ContentPresenter
            isLoggedIn={isLoggedIn}
            randomNumber={randomNumber}
            loading={loading}
            contentData={data}
            returnMovies={returnMovies}
            returnTvShows={returnTvShows}
            returnNetflixSeries={returnNetflixSeries}
        />
    )
}