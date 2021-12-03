import React from 'react';
import useStyles from "../home/style";
import Header from "../../components/header/Header";
import {Divider} from "@material-ui/core";
import TwittList from "../home/components/TwittList";
import {Person as UserIcon} from "@material-ui/icons";


const tweets = [
    {
        sender: {
            name: 'ساسان سهرابی',
            id: '@sasan.sohrabi',
            img: 'images/user_img.png'
        },
        like: 2,
        text: '\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.'
    },
    {
        sender: {
            name: 'ساسان سهرابی',
            id: '@sasan.sohrabi',
            img: 'images/user_img.png'
        },
        like: 10,
        text: '\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.'
    },
    {
        sender: {
            name: 'ساسان سهرابی',
            id: '@sasan.sohrabi',
            img: 'images/user_img.png'
        },
        like: 50,
        text: '\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.'
    },
    {
        sender: {
            name: 'ساسان سهرابی',
            id: '@sasan.sohrabi',
            img: 'images/user_img.png'
        },
        like: 50,
        text: '\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.'
    },
    {
        sender: {
            name: 'ساسان سهرابی',
            id: '@sasan.sohrabi',
            img: 'images/user_img.png'
        },
        like: 45,
        text: '\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.\n' +
            '                            انرژی خورشیدی می تواند جایگزین بسیار مفیدی برای جامعه باشد.'
    },
]

const TweetByUser = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title={"ساسان سهرابی"} icon={<UserIcon/>}/>
            <Divider classes={classes.divider}/>
            <TwittList data={tweets}/>
        </div>
    );
};

export default TweetByUser;
