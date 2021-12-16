import React, {useEffect, useState} from 'react';
import useStyles from "./style";
import Header from "../../components/header/Header";
import {Divider} from "@material-ui/core";
import NewTwitt from "./components/NewTwitt";
import TwittList from "./components/TwittList";
import HomeIcon from "@material-ui/icons/Home";
import {getAllTweets} from "../../api/api_tweet";


const Home = () => {
    const classes = useStyles();

    const [tweets, setTweets] = useState([]);

    const updateTweets = () => {
        getAllTweets((isOk, data) => {
            if (!isOk)
                return alert(data.message)
            else setTweets(data)
        })
    };

    useEffect(() => {
        updateTweets()
    }, []);


    return (
        <div className={classes.root}>
            <Header title={"خانه"} icon={<HomeIcon/>}/>
            <Divider classes={classes.divider}/>
            <NewTwitt updateTweets={updateTweets}/>
            <TwittList data={tweets}/>
        </div>
    );
};

export default Home;
