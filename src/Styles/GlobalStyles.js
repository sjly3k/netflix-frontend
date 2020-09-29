import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.blackColor};
  }
  input:focus {
    outline : none;
  }
`