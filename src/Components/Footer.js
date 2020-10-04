import React from "react";
import styled from "styled-components";
import {Facebook, Globe, Instagram, Twitter, Youtube} from "./Icons";
import {Link} from "react-router-dom";

const colorType = type => {
    let color;
    if (type === "light") {
        color = "#F3F3F3"
    } else {
        color = "#000000"
    }

    return `
        background-color: ${color};
    `
}

const FooterDef = styled.footer`
  margin : 0px auto;
  width : 1090px;
  display : flex;
  flex-direction: column;
  justify-content: center;
  padding : 70px 45px 0px 45px;
  ${props => colorType(props.type)};
  color : ${props => props.theme.lightGreyColor};
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width : 100%;
  margin : 0 auto;
  max-width: 900px;
  padding-bottom: 20px;
`

const List = styled.ul`
  color: #757575;
  fill : gray;
  a {
    text-decoration: none;
    color: #757575;
  }
  svg {
    margin-right : 15px;
    margin-bottom: 15px;
  }
`

const ListItem = styled.li`
  display: inline-block;
  width : 25%;
  padding-right : 12px;
  margin-bottom: 16px;
  font-size : 12px;
`

const Text = styled.span`
  margin-bottom: 5px;
  color : gray;
  font-size: 12px;
  &:nth-child(2) {
    font-size: 18px;
    margin-bottom: 30px;
  };
  &:nth-child(5) {
    font-size: 13px;
    margin-top : 24px;
    margin-bottom: 13px;
  }
`

const LanguageSelectorWrapper = styled.div`
  width: 133.5px;
  height: 53px;
  border : gray 1px solid;
  margin-top : 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  svg {
    fill : gray;
    text-align: left;
    margin-right: 10px;
  }
  
  span:nth-child(2) {
      font-size: 16px;
      margin : 0;
  }
`

const Footer = ({type = "dark"}) => {
    return (
        <FooterDef type={type}>
            <ContentWrapper>
                <List>
                    <Link href="https://twitter.com/netflixkr">
                        <Facebook size={25}/>
                    </Link>
                    <Link href="https://www.instagram.com/netflixkr/">
                        <Instagram size={25}/>
                    </Link>
                    <Link href="https://www.facebook.com/NetflixKR">
                        <Twitter size={25}/>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured">
                        <Youtube size={25}/>
                    </Link>
                </List>
                <Text>Questions? Call 00-308-321-0161</Text>
                <List>
                    <Link to="#">
                        <ListItem>FAQ</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Help Center</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Account</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Media Center</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Investor Relation</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Jobs</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Ways to Watch</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Terms of Use</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Privacy</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Cookies Preference</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Corporate Information</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Contact Us</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Speed Test</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Legal Notices</ListItem>
                    </Link>
                    <Link to="#">
                        <ListItem>Netflix Originals</ListItem>
                    </Link>
                </List>

                <LanguageSelectorWrapper>
                    <Globe size={16}/>
                    <Text>English</Text>
                </LanguageSelectorWrapper>

                <Text>Netflix South Korea</Text>
                <Text>Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone: 00-308-321-0161</Text>
                <Text>Representative: Reginald Shawn Thompson</Text>
                <Text>Email: korea@netflix.com</Text>
                <Text>Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea</Text>
                <Text>Hosted by: Amazon Web Services Inc.</Text>
                <Text>Link to KFTC website</Text>
            </ContentWrapper>
        </FooterDef>
    )
}

// 검은 화면, 흰 화면 두가지 있다는 것 생각 -> Footer 배경 무슨 색인지 알려주면 되잖아!
export default Footer
