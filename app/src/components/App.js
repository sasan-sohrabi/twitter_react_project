import React from 'react';
import Layout from "./layout/Layout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages/home/Home";
// import P404 from "../pages/404/404";
import TweetByHashtag from "../pages/tweetByHashtag/TweetByHashtag";
import TweetByUser from "../pages/tweetByUser/TweetByUser";
import AuthPage from "../pages/auth/AuthPage";

const APP = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/login"} component={AuthPage}/>
                <Route path={"/"} render={() => {
                    return <Layout>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route exact path={"/hashtags/:hashtag"} component={TweetByHashtag}/>
                            <Route exact path={"/users/:user"} component={TweetByUser}/>
                        </Switch>
                    </Layout>
                }}/>
            </Switch>
        </BrowserRouter>
    );
};

export default APP;
