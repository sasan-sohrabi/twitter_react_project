import React from 'react';
import useStyles from "../style";
import {Button, Grid, IconButton} from "@material-ui/core";

const NewTwitt = () => {
    const classes = useStyles();
    return (
        <div className={classes.newTwitt}>
            <Grid container alignItems={'center'}>
                <img src={"/images/user_img.png"} className={classes.userImg} alt={"user"}/>
                <textarea placeholder={"توییت کن ..."} className={classes.input}/>
            </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={"center"}>
                <Button variant={"contained"} color={"primary"} className={classes.newTwittBtn}>
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
