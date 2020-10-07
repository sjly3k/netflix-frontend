import React from 'react';
import GlobalStyles from "../Styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import Theme from "../Styles/Theme";
import AppRouter from "./Routes";
import {gql} from "apollo-boost";
import {useQuery} from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";

const QUERY = gql`
    {
        isLoggedIn @client
    }
`

export default () => {
    const { data : { isLoggedIn } } = useQuery(QUERY)
    return (
        <ThemeProvider theme={Theme}>
            <>
              <GlobalStyles/>
              <AppRouter isLoggedIn={isLoggedIn}/>
              <ToastContainer position={toast.POSITION.TOP_LEFT} />
            </>
        </ThemeProvider>
    );
};