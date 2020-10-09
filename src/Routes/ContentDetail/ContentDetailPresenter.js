import styled from "styled-components";
import {
    BackButtonArrow,
    Play,
    Plus,
    ThumbsDownEmpty,
    ThumbsUpEmpty, ThumbsUpFull
} from "../../Components/Icons";
import {Link} from "react-router-dom";
import React from "react";
import Loader from "../../Components/Loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin : 0 auto;
  width: 850px;
`

const BackButton = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color : ${props => props.theme.darkGreyColor};
  top : 30px;
  left: 30px;
  
  svg {
    position: absolute;
    fill : #d2d2d2;
    left : 16px;
    top : 18px;
  }
`

const MainImage = styled.div`
  width: 100%;
  position: relative;
  
  img.describeImg {
    width: 100%;
  }
  
  img.titleImg {
    position : absolute;
    width: 40%;
    left : 30px;
    bottom : 90px;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  display : flex;
  width: 40%;
  bottom: 5%;
  left: 30px;
  bottom: 30px;
`

const PlayButton = styled.button`
  background-color: ${props => props.theme.lightGreyColor};
  width: 113px;
  height: 42px;
  border-radius: 8px;
  border: none;
  padding : 8px 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  outline: none;
  cursor : pointer;
  
  svg {
    margin-right: 5px;
  }
  span {
    font-size: 15px;
    font-weight: bold;
  }
`
const OtherButton = styled.button`
  border-radius: 100%;
  width: 42px;
  height: 42px;
  border: 1px solid ${props => props.theme.lightGreyColor};
  outline: none;
  cursor : pointer;
  position: relative;
  margin-right: 10px;
  background-color: transparent;
  svg {
    fill : ${props => props.theme.lightGreyColor};
    position: absolute;
    left : 9px;
    bottom: 9px;
  }
`

const DetailEpisodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 850px;
  padding : 20px 48px;
  background-color: #181818;
`

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns : minmax(0,2fr) minmax(0,1fr);
  column-gap : 2em;
`

const ContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  color : white;
  font-size: 14px;
  
  span.caption {
    line-height: 27px;
    font-size: 18px;
  }
  span.tagLabel {
    color : #777;
    margin : 7px 7px 7px 0px;
    line-height: 20px;
  }
  span.tagLabelItem {
    color : white;
  }
  span.tagLabelMore {
    color : white;
    font-style: italic;
  }
`

const VideoMetaData = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin : 12px 0px;
  
  span {
    margin-right: 10px;
  }
  span.matchScore {
    color : #46d369;
    font-weight: bold;
  }
  span.TVShowAgeLimit {
    border : 2.5px solid ${props => props.theme.lightGreyColor};
    padding : 2px 5px;
    text-align: center;
  }
  span.MovieAgeLimit {
    text-align: center;
  }
`

const Episodes = styled.div`
  margin-top: 25px;
  
  span.title {
    font-size: 24px;
    font-weight: 700;
    color : white;
  }
`

const EpisodeItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding : 16px;
  border-bottom: 2px solid rgb(35, 35, 35);
  
  :hover {
    background-color: #333;
  }
  
  span.titleIndex {
    font-size : 24px;
    color : #D2D2D2;
    margin : 0px 20px;
  }
  
  img.videoImg {
    max-width: 100%;
    height: 4em;
  }
`

const EpisodeMetaData = styled.div`
  display: flex;
  flex-direction: column;
  
  span.caption {
    font-size : 16px;
    line-height: 20px;
    padding : 14px;
    padding-top: 0px;
    color : #D2D2D2;
  }
`

const EpisodeMetaDataColumn = styled.div`
  display: flex;
  justify-content: space-between;
  padding : 16px;
  padding-bottom: 8px;
  font-size : 16px;
  color : #ffffff;
  
  span.episodeTitle {
    font-weight: 700;
  }
`

const MoreLikeThis = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
  span.title {
    font-size: 24px;
    font-weight: 700;
    color : white;
    margin-bottom: 20px;
  }
`

const MoreLikeThisItemWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3,1fr);
   grid-gap: 1em;
`

const MoreLikeThisItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.darkGreyColor};
  height: 100%;
  
  img.describeImg {
    width: 100%;
    margin-bottom: 14px;
  }
  span.matchScore {
    color : #46d369;
    font-weight: bold;
    padding : 0px 14px;
  }
  
  span.year {
    font-size: 16px;
    color : #ffffff;
    margin-left: 8px;
  }
  
  span.TVShowAgeLimit {
    border : 2.5px solid ${props => props.theme.lightGreyColor};
    padding : 2px 5px;
    color : #ffffff;
    text-align: center;
    text-decoration: none;
  }
  
`

const MoreLikeThisItemCaption = styled.div`

  width: 100%;
  padding : 0px 14px 14px 14px;
  color : #d2d2d2;
  font-size: 14px;
  line-height: 20px;  
  
`

const MoreLikeThisItemColumn = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin: 8px 0px;
  padding : 0px 14px;
`

export default ({
    contentData,
    allContentData,
    loading,
    allContentDataLoading,
    meLoading,
    ageChanger,
    durationChanger,
    meData,
    handleToggleLike
}) => {
    return (
        <Container>
            {loading && allContentDataLoading && meLoading && <Loader/>}
            <Link to="/browse">
                <BackButton>
                    <BackButtonArrow size={24}/>
                </BackButton>
            </Link>

            {
                contentData && meData && (() => {
                    const describeImg = contentData.seeFullContent.files.find(file => file.type === "DESCRIBE")['url']
                    const titleImg = contentData.seeFullContent.files.find(file => file.type === "TITLE")['url']
                    const isLiked = contentData.seeFullContent.likes.find(like => like.user.id === meData.me.id)
                    return (
                        <MainImage>
                            <img className="describeImg" alt={contentData.seeFullContent.title} src={describeImg}/>
                            <img className="titleImg" alt={contentData.seeFullContent.title} src={titleImg}/>
                            <ButtonWrapper>
                                <PlayButton>
                                    <Play size={21}></Play>
                                    <span>Play</span>
                                </PlayButton>
                                <OtherButton>
                                    <Plus size={21}></Plus>
                                </OtherButton>
                                <OtherButton onClick={() => handleToggleLike(contentData.seeFullContent.id)}>
                                    { isLiked ? (<ThumbsUpFull size={21}/>) : (<ThumbsUpEmpty size={21}/> )}
                                </OtherButton>
                                <OtherButton>
                                    <ThumbsDownEmpty size={21}></ThumbsDownEmpty>
                                </OtherButton>
                            </ButtonWrapper>
                        </MainImage>
                    )
                })()
            }
            <DetailEpisodeContainer>
                <DetailWrapper>
                    {loading && allContentDataLoading && meLoading && <Loader/>}
                    {
                        !loading && !allContentDataLoading && contentData && (() => {
                            const year = contentData.seeFullContent.createdAt.split('-')[0]
                            const ageLimit = ageChanger(contentData.seeFullContent)
                            const season = Math.max.apply(null, contentData.seeFullContent.episodes.map(episode =>
                                episode.season
                            ))

                            if (contentData.seeFullContent.type === "TV_SHOW") {
                                return (
                                    <ContentDetail>
                                        <VideoMetaData>
                                            <span className="matchScore">98% Match</span>
                                            <span className="year">{year}</span>
                                            <span className="TVShowAgeLimit">{ageLimit}</span>
                                            <span className="season">{season} Season</span>
                                        </VideoMetaData>
                                        <span className="caption">{contentData.seeFullContent.caption}</span>
                                    </ContentDetail>
                                )
                            }
                            else if (contentData.seeFullContent.type === "MOVIE") {
                                return (
                                    <ContentDetail>
                                        <VideoMetaData>
                                            <span className="matchScore">98% Match</span>
                                            <span className="year">{year}</span>
                                            <span className="MovieAgeLimit">{ageLimit}</span>
                                            <span className="duration">{durationChanger(contentData.seeFullContent.duration)[1]}h {durationChanger(contentData.seeFullContent.duration)[2]}m</span>
                                        </VideoMetaData>
                                        <span className="caption">{contentData.seeFullContent.caption}</span>
                                    </ContentDetail>
                                )
                            }
                        })()
                    }
                    {
                        !loading && !allContentDataLoading && contentData && (() => {
                            const actors = contentData.seeFullContent.actors.map(actor => actor.name).join(', ')
                            const genres = contentData.seeFullContent.genres.map(genre => genre.name).join(', ')
                            return (
                                <ContentDetail>
                                    <span className="tagLabel">
                                        Cast :
                                        <span className="tagLabelItem"> {actors}</span>
                                        <Link to="/about">
                                            <span className="tagLabelMore">, more</span>
                                        </Link>
                                    </span>
                                    <span className="tagLabel">
                                        Genres :
                                        <span className="tagLabelItem"> {genres}</span>
                                    </span>
                                    <span className="tagLabel">
                                        This show is :
                                        <span className="tagLabelItem"> Suspenseful</span>
                                    </span>
                                </ContentDetail>
                            )
                        })()
                    }
                </DetailWrapper>
                <Episodes>
                    <span className="title">Episodes</span>
                    {
                        !loading && !allContentDataLoading &&
                        contentData &&
                        contentData.seeFullContent.episodes.map((episode, index) => {
                            return (
                                <EpisodeItem>
                                    <span className="titleIndex">{index + 1}</span>
                                    <img className="videoImg" alt={episode.title} src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaicZ43pSrQkXOnz16Ir4cUMoJkrSq9NA5lpeDEmD1Q4vvgaluPQXCkemfXZrgpHMVju6AoLe8oqUQ4s9Pu-Jj4wqCckk2bo_hl60utztOjhNp5O.webp?r=53e"/>
                                    <EpisodeMetaData>
                                        <EpisodeMetaDataColumn>
                                            <span className="episodeTitle">{episode.title}</span>
                                            <span className="duration">{durationChanger(episode.duration)[0]}m</span>
                                        </EpisodeMetaDataColumn>
                                        <span className="caption">{episode.caption}</span>
                                    </EpisodeMetaData>
                                </EpisodeItem>
                            )
                        })
                    }
                </Episodes>
                <MoreLikeThis>
                    <span className="title">More Like This</span>
                    <MoreLikeThisItemWrapper>
                        {
                            !loading && !allContentDataLoading &&
                            allContentData &&
                            allContentData.showAllContent.map((content) => {
                                if (content.type === "MOVIE") {
                                    const describeImg = content.files.find(file => file.type === "MAIN")['url']
                                    const year = content.createdAt.split('-')[0]
                                    const ageLimit = ageChanger(content)

                                    return (
                                        <MoreLikeThisItem>
                                            <Link to={`/browse/${content.id}`}>
                                                <img className="describeImg" src={describeImg}/>
                                                <span className="matchScore">98% Match</span>
                                                <MoreLikeThisItemColumn>
                                                    <span className="MovieAgeLimit">{ageLimit}</span>
                                                    <span className="year">{year}</span>
                                                </MoreLikeThisItemColumn>
                                                <MoreLikeThisItemCaption>
                                                    <span className="caption">{content.caption}</span>
                                                </MoreLikeThisItemCaption>
                                            </Link>
                                        </MoreLikeThisItem>

                                    )
                                } else {
                                    const describeImg = content.files.find(file => file.type === "MAIN")['url']
                                    const year = content.createdAt.split('-')[0]
                                    const ageLimit = ageChanger(content)

                                    return (
                                        <Link to={`/browse/${content.id}`}>
                                            <MoreLikeThisItem>
                                                <img className="describeImg" src={describeImg}/>
                                                <span className="matchScore">98% Match</span>
                                                <MoreLikeThisItemColumn>
                                                    <span className="TVShowAgeLimit">{ageLimit}</span>
                                                    <span className="year">{year}</span>
                                                </MoreLikeThisItemColumn>
                                                <MoreLikeThisItemCaption>
                                                    <span className="caption">{content.caption}</span>
                                                </MoreLikeThisItemCaption>
                                            </MoreLikeThisItem>
                                        </Link>
                                    )
                                }

                            })
                        }
                    </MoreLikeThisItemWrapper>
                </MoreLikeThis>
            </DetailEpisodeContainer>
        </Container>
    )
}