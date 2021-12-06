import React from 'react';
import Layout from "./layout/Layout";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "../pages/home/Home";
// import P404 from "../pages/404/404";
import TweetByHashtag from "../pages/tweetByHashtag/TweetByHashtag";
import TweetByUser from "../pages/tweetByUser/TweetByUser";

const APP = () => {
    return (
        <BrowserRouter>
            <Route path={"/"} render={() => {
                return <Layout>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/hashtags/:hashtag"} component={TweetByHashtag}/>
                    <Route exact path={"/users/:user"} component={TweetByUser}/>
                </Layout>
            }}/>
        </BrowserRouter>
    );
};

export default APP;
