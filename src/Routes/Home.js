import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Column = styled.div`
    width : 100%;
    max-width: 2500px;
    border-bottom : 8px solid #222;
    
    &:nth-child(1) {
      height: 500px;
      background-image : url("../Static/netflix_login_background_img.jpg");
    }
    &:nth-child(2) {
      background-color: aquamarine;
      height: 500px;
      background-image : url("../Static/netflix_login_background_img.jpg");
    }
`

const FirstColumn = styled(Column)`
    border : 1px white solid;
    
    background-image: url("../Static/netflix_login_background_img.jpg");
`

export default () => {
    return (
        <Wrapper>
            <Column/>
            <Column/>
        </Wrapper>
    )
}