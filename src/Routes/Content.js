import Header from "../Components/Header";
import React from "react";
import { Helmet } from "rl-react-helmet";
import styled from "styled-components"
import { gql } from "apollo-boost"
import {useQuery} from "react-apollo-hooks";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";

const CONTENT_QUERY = gql`
    {
        showAllContent {
            id,
            title,
            genres {
                name
            },
            type,
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
const Container = styled.div`

`
const Wrapper = styled.div`
  padding : 40px 60px 0px 60px;
  display : flex;
  flex-direction: column;
`

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  a {
    margin-bottom : 10px;
    font-size: 25px;
  }
`

const ImageWrapper = styled.div`
`

const Text = styled.span`
  color : white;
`

const MainImage = styled.img`
  width: 100%;
`

const returnMovies = (contents) => {
    return contents.filter(content => content.type === "MOVIE")
}

const returnTvShows = (contents) => {
    return contents.filter(content => content.type === "TV_SHOW")
}

const returnNetflixSeries = (contents) => {
    return contents.filter(content => content.is_netflix === true)
}


export default () => {
    const { data, loading } = useQuery(CONTENT_QUERY)

    return (
        <Container>
            <Header isLoggedIn="true"></Header>
            <Helmet>
                <title>Netflix</title>
            </Helmet>
            {
                !loading &&
                data &&
                data.showAllContent && (() => {
                    const randomNumber = Math.floor(Math.random() * data.showAllContent.length)
                    return (
                        <Link to={`/browse/${data.showAllContent[randomNumber].id}`}>
                            <MainImage src={data.showAllContent[randomNumber].files.find(file => file.type === "DESCRIBE")['url']}/>
                        </Link>
                    )
                })()
            }
            <Wrapper>
                <Slider>
                    <Link to={"/browse/movies"}>
                        <Text>Movies</Text>
                    </Link>
                    <ImageWrapper>
                        {
                            !loading &&
                            data &&
                            data.showAllContent &&
                            returnMovies(data.showAllContent).map(movie => {
                                const found = movie.files.find(file => file.type === "MAIN")['url']
                                return (
                                    <Link to={`/browse/${movie.id}`} key={movie.id}>
                                        <img src={found} key={movie.id}/>
                                    </Link>
                                )
                            })
                        }
                    </ImageWrapper>
                </Slider>
                <Slider>
                    <Link to={"/browse/tv"}>
                        <Text>TV Shows</Text>
                    </Link>
                    <ImageWrapper>
                        {
                            !loading &&
                            data &&
                            data.showAllContent &&
                            returnTvShows(data.showAllContent).map(tvShow => {
                                const found = tvShow.files.find(file => file.type === "MAIN")['url']
                                return (
                                    <Link to={`/browse/${tvShow.id}`} key={tvShow.id}>
                                        <img src={found} key={tvShow.id}/>
                                    </Link>
                                )
                            })
                        }
                    </ImageWrapper>
                </Slider>
                <Slider>
                    <Link to={"/browse/tv"}>
                        <Text>Netflix Series</Text>
                    </Link>
                    <ImageWrapper>
                        {
                            !loading &&
                            data &&
                            data.showAllContent &&
                            returnNetflixSeries(data.showAllContent).map(netflix => {
                                console.log(netflix)
                                const found = netflix.files.find(file => file.type === "MAIN")['url']
                                return (
                                    <Link to={`/browse/${netflix.id}`} key={netflix.id}>
                                        <img src={found} key={netflix.id}/>
                                    </Link>
                                )
                            })
                        }
                    </ImageWrapper>
                </Slider>
            </Wrapper>
            <Footer/>
        </Container>
    )
}