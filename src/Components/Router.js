import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { PropTypes } from "prop-types"
import Browse from "../Routes/Browse";
import Home from "../Routes/Home";

const LoggedInRoutes = () => {
    return (
        <>
            <Route exact path="/" component={Browse}></Route>
        </>
    )
}

const LoggedOutRoutes = () => {
    return (
        <>
            <Route exact path="/" component={Home}></Route>
        </>
    )
}

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}
            </Switch>
        </Router>
    )
}

AppRouter.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired,
}

export default AppRouter;