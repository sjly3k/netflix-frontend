import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.blackColor};
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  input:focus {
    outline : none;
  }
  a {
    text-decoration: none;
  }
`