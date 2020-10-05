import React from "react";
import {gql} from "apollo-boost";
import {useQuery} from "react-apollo-hooks";
import styled from "styled-components";
import {Play, Plus, ThumbsDownEmpty, ThumbsUpEmpty} from "../Components/Icons";

const SEE_FULL_CONTENT = gql`
    query seeFullContent (
        $id : String!
    ) {
        seeFullContent (id : $id) {
            id
            title
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin : 0 auto;
  width: 850px;
  position: relative;
  
  img {
    width: 100%;
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  display : flex;
  width: 40%;
  bottom: 5%;
  left: 30px;
  bottom: 65px;
  
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

const DetailWrapper = styled.div`
  display: flex;
  width: 850px;
  background-color: ${props => props.theme.darkGreyColor};
`

const ContentDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  color : white;
`

const VideoMetaData = styled.div`
  display: flex;
  span.season {
    
  }
`

const ageChanger = (contentType, age_limit) => {
    if (contentType === "TV_SHOW") {
        if (age_limit === "ALL") {
            return "ALL"
        } else if (age_limit === "OVER_12") {
            return "12+"
        } else if (age_limit === "OVER_15") {
            return "15+"
        } else if (age_limit === "OVER_18") {
            return "18+"
        }
    }
}

export default ({ match }) => {
    const contentId = match.params.id
    console.log(contentId)

    const { data, loading } = useQuery(SEE_FULL_CONTENT, {
        variables : {
            id : contentId
        }
    })

    if (!loading) {
        console.log(data)
    }

    return (
        <Container>
            {
                !loading &&
                data &&
                data.seeFullContent && (() => {
                    const found = data.seeFullContent.files.find(file => file.type === "DESCRIBE")['url']
                    return (
                        <img src={found}/>
                    )
                })()
            }
            <ButtonWrapper>
                <PlayButton>
                    <Play size={21}></Play>
                    <span>Play</span>
                </PlayButton>
                <OtherButton>
                    <Plus size={21}></Plus>
                </OtherButton>
                <OtherButton>
                    <ThumbsUpEmpty size={21}></ThumbsUpEmpty>
                </OtherButton>
                <OtherButton>
                    <ThumbsDownEmpty size={21}></ThumbsDownEmpty>
                </OtherButton>
            </ButtonWrapper>
            <DetailWrapper>
                {
                    !loading &&
                    data &&
                    data.seeFullContent && (() => {
                        const year = data.seeFullContent.createdAt.split('-')[0]
                        const ageLimit = ageChanger(data.seeFullContent.type, data.seeFullContent.age_limit)
                        const season = Math.max.apply(null, data.seeFullContent.episodes.map(episode =>
                            episode.season
                        ))
                        console.log(season)
                        return (
                            <ContentDetail>
                                <VideoMetaData>
                                    <span className="year">{year}</span>
                                    <span className="ageLimit">{ageLimit}</span>
                                    <span className="season">{season} Season</span>
                                </VideoMetaData>
                                <span className="caption">{data.seeFullContent.caption}</span>
                            </ContentDetail>
                        )
                    })()
                }
            </DetailWrapper>
        </Container>
    )
}