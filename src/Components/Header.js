import React from "react";
import styled from "styled-components";
import {Bell, Gift, Kids, Search, User} from "./Icons";
import { Link } from "react-router-dom";

const LogoPng = require('../Static/netflix_logo.png')

const isFixed = isLoggedIn => {
    if (isLoggedIn === "true") {
        return `
            background-color: rgb(30, 30, 30);
            position : fixed;
        `
    } else {
        return `
            position : static;
            justify-content: space-between;
        `
    }
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin : 0 auto;
  height: 70px;
  padding : 0px 60px;
  ${props => isFixed(props.isLoggedIn)}
  
  ul:last-child {
    position: absolute;
    right : 60px;
  }
`

const Logo = styled.img`
  width: 150px;
  height: 100%;
  margin-right: 25px;
`

const SignUpButton = styled.button`
  background-color: #e50914;
  width: 80px;
  height: 60%;
  color : white;
  font-weight: bold;
  border-radius: 10%;
  padding : 7px;
  outline: none;
  border : none;
`

const SignUpButtonWrapper = styled.div`
  
`

const Menu = styled.ul`
  display : flex;
  align-items: center;
  text-align: center;
  a {
    text-decoration: none;
  }
`

const MenuList = styled.li`
  margin-left: 20px;
  text-align: center;
  color : white;
  fill: white;
`

const Header = ({isLoggedIn}) => {
    return (
        <HeaderContainer isLoggedIn={isLoggedIn}>
            <Link to="/">
                <Logo src={LogoPng}/>
            </Link>
            { isLoggedIn === "true" ? (
                <>
                <Menu>
                    <Link to="#">
                        <MenuList>Home</MenuList>
                    </Link>
                    <Link to="#">
                        <MenuList>TV Shows</MenuList>
                    </Link>
                    <Link to="#">
                        <MenuList>Movies</MenuList>
                    </Link>
                    <Link to="#">
                        <MenuList>Latest</MenuList>
                    </Link>
                    <Link to="#">
                        <MenuList>My List</MenuList>
                    </Link>
                </Menu>
                <Menu>
                    <Link to="#">
                        <MenuList>
                            <Search size={24}/>
                        </MenuList>
                    </Link>
                    <Link to="#">
                        <MenuList>
                            <Gift size={24}/>
                        </MenuList>
                    </Link>
                    <Link to="#">
                        <MenuList>
                            <Kids size={24}/>
                        </MenuList>
                    </Link>
                    <Link to="#">
                        <MenuList>
                            <Bell size={24}/>
                        </MenuList>
                    </Link>
                    <Link to="#">
                        <MenuList>
                            <User size={24}/>
                        </MenuList>
                    </Link>
                </Menu>
                </>
            ) : (
                <SignUpButtonWrapper>
                    <Link to="/signup">
                        <SignUpButton type="button">Sign Up</SignUpButton>
                    </Link>
                </SignUpButtonWrapper>
            )}
        </HeaderContainer>
    )
}

export default Header;