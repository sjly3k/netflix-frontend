import React from "react";
import styled from "styled-components";
import {Bell, Gift, Kids, Search, User} from "./Icons";
import {Link, useHistory} from "react-router-dom";
import {gql} from "apollo-boost"
import {useMutation} from "react-apollo-hooks";

const LogoPng = require('../Static/netflix_logo.png')

const isFixed = isLoggedIn => {
    if (isLoggedIn === true) {
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

const DropDownDiv = styled.div`
  position: relative;
  display: inline-block;
  
  :hover {
    display: block;
    
    div {
      display: block;
    }
  }
`

const DropDownBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  
  a:visited {background-color: #ddd;}
`

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  
  a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
  }
`

export const LOG_OUT = gql`
    mutation logUserOut {
        logUserOut @client
    }
`;

const Header = ({isLoggedIn}) => {
    let history = useHistory()
    const option = ["one", "two"]
    const [logOut] = useMutation(LOG_OUT)
    const handleLogout = () => {
        logOut()
        history.push("/")
    }
    return (
        <HeaderContainer isLoggedIn={isLoggedIn}>
            <Link to="/">
                <Logo src={LogoPng}/>
            </Link>
            { isLoggedIn === true ? (
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
                        <MenuList>
                            <DropDownDiv>
                                <DropDownBtn>
                                    <User size={24}/>
                                </DropDownBtn>
                                <DropdownContent>
                                    <Link onClick={() => alert("Profile")}>Profile</Link>
                                    <Link onClick={() => handleLogout()}>Logout</Link>
                                </DropdownContent>
                            </DropDownDiv>
                        </MenuList>
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