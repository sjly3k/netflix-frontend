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
        }
    }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin : 0 auto;
  width: 850px;
  position: relative;
`

const ButtonWrapper = styled.div`
  position: absolute;
  display : flex;
  width: 40%;
  bottom: 5%;
  left: 100px;
  
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
        </Container>
    )
}