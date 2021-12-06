import React, {useEffect, useState} from 'react';
import useStyles from "../home/style";
import Header from "../../components/header/Header";
import {Divider} from "@material-ui/core";
import TwittList from "../home/components/TwittList";
import {Person as UserIcon} from "@material-ui/icons";
import {getAllTweets} from "../../api/api_tweet";


const TweetByUser = (props) => {
    const classes = useStyles();
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        getAllTweets((isOk, data) => {
            if (!isOk)
                return alert(data.message)
            else setTweets(data)
        })
    }, []);

    return (
        <div className={classes.root}>
            <Header title={props.match.params.user} icon={<UserIcon/>}/>
            <Divider classes={classes.divider}/>
            <TwittList data={tweets}/>
        </div>
    );
};

export default TweetByUser;
