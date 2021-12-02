import React from 'react';
import useStyles from "./style";
import Header from "./components/Header";
import {Divider} from "@material-ui/core";
import NewTwitt from "./components/NewTwitt";
import TwittList from "./components/TwittList";

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

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Divider classes={classes.divider}/>
            <NewTwitt/>
            <TwittList data={tweets}/>
        </div>
    );
};

export default Home;
