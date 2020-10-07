import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PropTypes } from "prop-types"
import Home from "../Routes/Home";
import Content from "../Routes/Content/Content";
import ContentDetail from "../Routes/ContentDetail/ContentDetail";
import Login from "../Routes/Auth";

const LoggedInRoutes = () => {
    return (
        <Switch>
            <Route path="/browse/:id" component={ContentDetail}/>
            <Route exact path="/browse" component={Content}/>
        </Switch>
    )
}

const LoggedOutRoutes = () => {
    return (
        <>
            <Route exact path="/" component={Home}></Route>
            <Route path="/signup" component={Login}></Route>
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