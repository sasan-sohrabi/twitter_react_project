import React, {useEffect, useState} from 'react';
import useStyles from "../home/style";
import Header from "../../components/header/Header";
import {Divider} from "@material-ui/core";
import TwittList from "../home/components/TwittList";
import {Person as UserIcon} from "@material-ui/icons";
import axios from "axios";




const TweetByUser = (props) => {
    const classes = useStyles();
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/tweets")
            .then(response => {
                const data = response.data;
                setTweets(data);
            }).catch(error => {
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
