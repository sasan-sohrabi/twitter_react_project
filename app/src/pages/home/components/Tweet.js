import React from 'react';
import {Grid, IconButton, Typography} from "@material-ui/core";
import useStyles from "../style";
import FavoriteIcon from '@material-ui/icons/Favorite';

const Tweet = ({data}) => {
    const classes = useStyles();

    const renderTweet = (text) => {
        return {__html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color: blue'>$&</a>")};
    };

    const getImage=()=>{
        if (data.user.image)
            return data.user.image
        return  "/images/user-profiles.png"
    }

    return (
        <div className={classes.TwittItem}>
            <Grid container>
                <img src={getImage()} className={classes.userImg} alt={"user"}/>
                <Grid item container direction={"column"} style={{flex: 1, marginRight: '1rem'}}>
                    <Grid item container>
                        <Typography className={classes.TwittItemName}>
                            {data.user.name}
                        </Typography>
                        <Typography className={classes.TwittItemId}>
                            {data.user.id}
                        </Typography>
                        <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.TwittText}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={"center"}>
                <IconButton>
                    <img src={"/images/retweet.png"} alt={'tweet'}/>
                </IconButton>
                <IconButton>
                    <FavoriteIcon/>
                </IconButton>
                <Typography className={classes.LikeCount}>
                    {data.like}
                </Typography>
            </Grid>
        </div>
    );
};

export default Tweet;
