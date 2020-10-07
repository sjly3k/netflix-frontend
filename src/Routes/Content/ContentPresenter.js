import Header from "../../Components/Header";
import {Helmet} from "rl-react-helmet";
import {Link} from "react-router-dom";
import Footer from "../../Components/Footer";
import React from "react";
import styled from "styled-components";

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

export default ({
    isLoggedIn,
    randomNumber,
    contentData,
    returnMovies,
    returnTvShows,
    returnNetflixSeries,
}) => {
    return (
        <Container>
            <Header isLoggedIn={isLoggedIn}></Header>
            <Helmet>
                <title>Netflix</title>
            </Helmet>
            {
                contentData && (() => {
                    const randomNumberChoice = randomNumber(contentData)
                    return (
                        <Link to={`/browse/${contentData.showAllContent[randomNumberChoice].id}`}>
                            <MainImage src={contentData.showAllContent[randomNumberChoice].files.find(file => file.type === "DESCRIBE")['url']}/>
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
                            contentData &&
                            returnMovies(contentData.showAllContent).map(movie => {
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
                            contentData &&
                            returnTvShows(contentData.showAllContent).map(tvShow => {
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
                            contentData &&
                            returnNetflixSeries(contentData.showAllContent).map(netflix => {
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