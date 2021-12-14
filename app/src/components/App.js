import React from 'react';
import Layout from "./layout/Layout";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from "../pages/home/Home";
// import P404 from "../pages/404/404";
import TweetByHashtag from "../pages/tweetByHashtag/TweetByHashtag";
import TweetByUser from "../pages/tweetByUser/TweetByUser";
import AuthPage from "../pages/auth/AuthPage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const APP = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute path={"/login"} component={AuthPage}/>
                <PrivateRoute path={"/"} render={() =>
                    <Layout>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route exact path={"/hashtags/:hashtag"} component={TweetByHashtag}/>
                            <Route exact path={"/users/:user"} component={TweetByUser}/>
                        </Switch>
                    </Layout>
                }/>
            </Switch>
            <ToastContainer/>
        </BrowserRouter>
    );
};

const isLogin = () => !!localStorage.getItem("x-auth-token");

const PublicRoute = ({component, props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return <Redirect to={"/"}/>
        else {
            return React.createElement(component, props);
        }
    }}/>
}

const PrivateRoute = ({render, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return render(props);
        else {
            return <Redirect to={"/login"}/>
        }
    }}/>
}

export default APP;
