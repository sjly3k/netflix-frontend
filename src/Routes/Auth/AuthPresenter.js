import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import React from "react";
import {Check} from "../../Components/Icons";

const Container = styled.div`
  max-width: 1000px;
  min-height: 660px;
  margin : 0 auto;
  border : 5px solid ${props => props.theme.darkGreyColor};
  border-radius: 5px;
`

const LoginForm = styled.div`
  padding: 60px 40px 68px;
  background: black;
  border-radius: 10px;
`

const Title = styled.div`
    color : white;
    font-size : 32px;
    font-weight: 700;
    margin-bottom: 28px;
`

const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background: #333;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  line-height: 50px;
  color : white;
  
  ::placeholder {
    font-size: 18px;
    padding-top: 0;
  }
`

const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  border-radius: 5px;
  background: #e50914;
  margin : 24px 0px 12px;
  
  color : white;
  font-size: 16px;
  font-weight: 700;
`

const HelpColumn = styled.div`
  display : flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  
  span {
    color : #b3b3b3;
    font-size: 13px;
    font-weight: 500;
  }
`

const InputCheckBox = styled.input`
  margin-right: 10px;
`

const CheckBoxWrapper = styled.div`

`

const SignUpColumn = styled.div`
  margin-top: 30px;
  
  span.welcomeText {
    color: #737373;
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
    margin-right: 10px;
  }
  span.signUpText {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
    margin-right: 10px;
    cursor : pointer;
  }
`

const CaptchaText = styled.div`
    margin-top: 11px;
    font-size: 13px;
    color: #8c8c8c;
    height: 125px;
    line-height: 18px;
    
    span.blue {
      color : ${props => props.theme.blueColor}
    }
`

const LikedContentsContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;
  margin-top : 20px;
`

const LikedContentsWrapper = styled.div`
  max-width: 800px;
  margin : 20px auto;
`

const LikedContentsText = styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color : white;
  
  svg {
    fill : white;
  }
  
  span.likedContentsText {
    color : ${props => props.theme.lightGreyColor};
  }
  
  span.likedContentsTextStrong {
    color : ${props => props.theme.blueColor};
    font-weight: bold;
  }
`

const LikedContentBigTitle = styled.div`
  
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  span.likedContentsTitle {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
  
  svg {
    border : 3px solid white;
    border-radius: 100%;
    fill : white;
    margin-right: 10px;
  }
`

const LikedContentsItem = styled.div`
  img {
    width: 100%;
  }
`

export default ({
    action,
    setAction,
    email,
    password,
    confirmPassword,
    phoneNumber,
    likedContents,
    setLikedContents,
    onSubmit,
    handleClick,
    allContentDataLoading,
    allContentData
}) => {

    return (
        <>
            <Header/>
                {action === "logIn" ?
                    (
                        <Container>
                            <LoginForm>
                                <Title>
                                    <h2>Sign In</h2>
                                </Title>
                                <form onSubmit={onSubmit}>
                                    <Input placeholder="Email or phone number" type="email" {...email}></Input>
                                    <Input placeholder="Password" type="password" {...password}></Input>
                                    <Button type={"submit"}>Sign In</Button>
                                </form>
                                <HelpColumn>
                                    <CheckBoxWrapper>
                                        <InputCheckBox type="checkbox"/>
                                        <span>Remember me</span>
                                    </CheckBoxWrapper>
                                    <span>Need help?</span>
                                </HelpColumn>
                                <SignUpColumn>
                                    <span className="welcomeText">New to Netflix?</span>
                                    <span className="signUpText" onClick={() => setAction("signUp")}>Sign Up now</span>
                                </SignUpColumn>
                                <CaptchaText>
                                    <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="blue">Learn more.</span></span>
                                </CaptchaText>
                            </LoginForm>
                        </Container>
                    ) : (
                        <>
                            <Container>
                                <LoginForm>
                                    <Title>
                                        <h2>Sign Up</h2>
                                    </Title>
                                    <form onSubmit={onSubmit}>
                                        <Input placeholder="Email or phone number" type="email" {...email}></Input>
                                        <Input placeholder="Password" type="password" {...password}></Input>
                                        <Input placeholder="Confirm Password" type="password" {...confirmPassword}></Input>
                                        <Input placeholder="Phone Number" {...phoneNumber}></Input>

                                        <LikedContentsWrapper>
                                            <LikedContentsText>
                                                <LikedContentBigTitle>
                                                    <Check size={40}/>
                                                    <span className="likedContentsTitle">{email.value}, choose 3 you like.</span>
                                                </LikedContentBigTitle>
                                                <span className="likedContentsText">It will help us TV shows & movies you'll love!
                                                <span className="likedContentsTextStrong"> Click the ones you like!</span>
                                                </span>
                                            </LikedContentsText>

                                            <LikedContentsContainer>
                                                {
                                                    !allContentDataLoading &&
                                                    allContentData &&
                                                    allContentData.showAllContent &&
                                                    allContentData.showAllContent.map((content) => {
                                                        if (content.files.find(file => file.type === "RECOMMEND")) {
                                                            const recommendImg = content.files.find(file => file.type === "RECOMMEND")['url']

                                                            return (
                                                                <LikedContentsItem>
                                                                    <img id={content.id} onClick={handleClick}
                                                                         src={recommendImg}/>
                                                                </LikedContentsItem>
                                                            )
                                                        }
                                                    })
                                                }
                                            </LikedContentsContainer>
                                        </LikedContentsWrapper>

                                        <Button type={"submit"}>Sign Up</Button>
                                    </form>
                                    <CaptchaText>
                                        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="blue">Learn more.</span></span>
                                    </CaptchaText>
                                </LoginForm>
                            </Container>
                        </>

                    )
                }
            <Footer/>
        </>
    )
}