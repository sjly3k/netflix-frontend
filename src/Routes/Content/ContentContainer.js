import React from "react";
import {useQuery} from "react-apollo-hooks";
import {CONTENT_QUERY, IS_LOGGED_IN_QUERY} from "../SharedQueries";
import ContentPresenter from "./ContentPresenter";

export default () => {
    const {
        data : { isLoggedIn }
    } = useQuery(IS_LOGGED_IN_QUERY)

    const { data, loading } = useQuery(CONTENT_QUERY)

    if (loading === false) {
        console.log("ContentContainer", data)
        console.log(isLoggedIn)
    }

    const returnMovies = (contents) => {
        return contents.filter(content => content.type === "MOVIE")
    }

    const returnTvShows = (contents) => {
        return contents.filter(content => content.type === "TV_SHOW")
    }

    const returnNetflixSeries = (contents) => {
        return contents.filter(content => content.is_netflix === true)
    }

    const randomNumber = (data) => {
        return Math.floor(Math.random() * data.showAllContent.length)
    }

    return (
        <ContentPresenter
            isLoggedIn={isLoggedIn}
            randomNumber={randomNumber}
            contentData={data}
            returnMovies={returnMovies}
            returnTvShows={returnTvShows}
            returnNetflixSeries={returnNetflixSeries}
        />
    )
}