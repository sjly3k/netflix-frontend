import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";

const Container = styled.div`
  max-width: 450px;
  min-height: 660px;
  margin : 0 auto;
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

const LoginInput = styled.input`
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

const LoginButton = styled.button`
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
  a {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
    margin-right: 10px;
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

export default () => {
    return (
        <>
            <Header/>
            <Container>
                <LoginForm>
                    <Title>
                        <h2>Sign In</h2>
                    </Title>
                    <LoginInput placeholder="Email or phone number"></LoginInput>
                    <LoginInput placeholder="Password"></LoginInput>
                    <LoginButton>Sign In</LoginButton>
                    <HelpColumn>
                        <CheckBoxWrapper>
                            <InputCheckBox type="checkbox"/>
                            <span>Remember me</span>
                        </CheckBoxWrapper>
                        <span>Need help?</span>
                    </HelpColumn>
                    <SignUpColumn>
                        <span className="welcomeText">New to Netflix?</span>
                        <Link to="/">
                            <span>Sign Up now</span>
                        </Link>
                    </SignUpColumn>
                    <CaptchaText>
                        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="blue">Learn more.</span></span>
                    </CaptchaText>
                </LoginForm>
            </Container>
            <Footer/>
        </>
    )
}