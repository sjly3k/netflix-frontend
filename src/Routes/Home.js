import React, { useState } from "react";
import {Helmet} from "rl-react-helmet";
import styled from "styled-components";
import Footer from "../Components/Footer";

const Wrapper = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Column = styled.div`
    width : 100%;
    max-width: 2500px;
    margin : 0 auto;
    border-bottom : 8px solid #222;
    display : flex;
    justify-content: center;
    align-items: center;
    padding : 70px 45px;
    
    &:nth-child(1) {
      height: 500px;
      flex-direction: column;
    }
    &:not(:nth-child(1)) {
      height: 500px;
      flex-direction: row;
    }
    &:nth-child(5) {
      flex-direction: column;
    }
`

const TextWrapper = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  text-align: center;
  // 뒤에 배경보다 앞으로 와야하니 배경의 z-index보다 크도록 설정
  z-index: 1;
`

const Image = styled.img`
  //max-width: 100%;
`

const Text = styled.h1`
  color : white;
  font-size: 4rem;
  font-weight: bold;
  margin : 0px 75px;
`

const H2Text = styled.h2`
  color : white;
  font-size: 1.625rem;
  margin : 16px 75px;
`

const H3Text = styled.h3`
  color : white;
  padding : 0px 47.5px 20px 47.5px;  
`

const InputWrapper = styled.div`
  display : flex;
  justify-content: center;
  width : 35%;
`
const Input = styled.input`
  min-width: 500px;
  height: 55px;
  padding : 0px 10px;
`

const SubmitButton = styled.button`
  color : white;
  width : 100%;
  text-transform: uppercase;
  font-size: 1.125rem;
  background-color: red;
  outline: none;
`

const FAQWrapper = styled.div`
  margin : 52px 459.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`

const FAQButton = styled.button`
  width : 726px;
  height: 32px;
  padding : .8em 2.2em .8em 1.2em;
  border : none;
  margin-bottom : 5px;
  text-align : left;
  color : white;
  background-color: ${props => props.theme.darkGreyColor};
`

export default () => {


    return (
        <>
        <Wrapper>
            <Helmet>
                <title>Netflix South Korea - Watch TV Shows Online, Watch Movies Online</title>
            </Helmet>
            <Column>
                <TextWrapper>
                    <Text>Unlimited movies, TV shows, and more.</Text>
                    <H2Text>Watch anywhere. Cancel anytime.</H2Text>
                    <H3Text>Ready to watch? Enter your email to create or restart your membership.</H3Text>
                </TextWrapper>
                <InputWrapper>
                    <form>
                        <Input placeholder="Email Address" type="email"/>
                    </form>
                    <SubmitButton type="button">Get Started</SubmitButton>
                </InputWrapper>
            </Column>
            <Column>
                <TextWrapper>
                    <Text>Enjoy on your TV.</Text>
                    <H2Text>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</H2Text>
                </TextWrapper>
                <Image src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
            </Column>
            <Column>
                <Image src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
                <TextWrapper>
                    <Text>Download your shows to watch offline.</Text>
                    <H2Text>Save your favorites easily and always have something to watch.</H2Text>
                </TextWrapper>
            </Column>
            <Column>
                <TextWrapper>
                    <Text>Watch everywhere.</Text>
                    <H2Text>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</H2Text>
                </TextWrapper>
                <Image src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"/>
            </Column>
            <Column>
                <Text>Frequently Asked Questions</Text>
                <FAQWrapper>
                    <FAQButton>What is Netflix?</FAQButton>
                    <FAQButton>How much does Netflix cost?</FAQButton>
                    <FAQButton>Where can I watch?</FAQButton>
                    <FAQButton>How do I cancel?</FAQButton>
                    <FAQButton>What can I watch on Netflix?</FAQButton>
                </FAQWrapper>
                <TextWrapper>
                    <H3Text>Ready to watch? Enter your email to create or restart your membership.</H3Text>
                </TextWrapper>
                <InputWrapper>
                    <form>
                        <Input placeholder="Email Address" type="email"/>
                    </form>
                    <SubmitButton type="button">Get Started</SubmitButton>
                </InputWrapper>
            </Column>
        </Wrapper>
        <Footer/>
        </>
    )
}