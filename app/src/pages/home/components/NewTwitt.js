import React from 'react';
import useStyles from "../style";
import {Button, Grid, IconButton} from "@material-ui/core";
import {toast} from "react-toastify";
import {newTweetRequest} from "../../../api/api_tweet"


const NewTwitt = ({updateTweets}) => {
    const input = React.useRef()

    React.useEffect(() => {
        input.current.addEventListener("input", function (e) {

        }, false);
    }, [])

    const newTweetClick = () => {
        const tweetText = input.current.innerText;
        if (!tweetText)
            return;
        const data = {
            "text": tweetText
        };

        newTweetRequest(data, (isOk, data) => {
            if (!isOk)
                return toast.error(data)
            toast.success("توییت شما ارسال شد")
            updateTweets();
            input.current.innerText = "";
        })
    }

    const getImage = () => {
        if (localStorage.getItem("image"))
            return localStorage.getItem("image")
        return "/images/user-profiles.png"
    }

    const classes = useStyles();
    return (
        <div className={classes.newTwitt}>
            <Grid container alignItems={'center'}>
                <img src={getImage()} className={classes.userImg} alt={"user"}/>
                <textarea placeholder={"توییت کن ..."} className={classes.input} ref={input}/>
            </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={"center"}>
                <Button variant={"contained"} color={"primary"} className={classes.newTwittBtn} onClick={newTweetClick}>
                    توییت
                </Button>
                <IconButton>
                    <img src={"/images/tweetpic.png"} className={classes.newTweetImg} alt={'tweet'}/>
                </IconButton>
            </Grid>
        </div>
    );
};

export default NewTwitt;
