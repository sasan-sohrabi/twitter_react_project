import React from 'react';
import {Grid, IconButton, Typography} from "@material-ui/core";
import useStyles from "../style";
import FavoriteIcon from '@material-ui/icons/Favorite';

const Tweet = ({data}) => {
    const classes = useStyles();
    return (
        <div className={classes.TwittItem}>
            <Grid container>
                <img src={data.sender.img} className={classes.userImg} alt={"user"}/>
                <Grid item container direction={"column"} style={{flex: 1, marginRight: '1rem'}}>
                    <Grid item container>
                        <Typography className={classes.TwittItemName}>
                            {data.sender.name}
                        </Typography>
                        <Typography className={classes.TwittItemId}>
                            {data.sender.id}
                        </Typography>
                        <Typography className={classes.TwittText}>
                            {data.text}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={"center"}>
                <IconButton>
                    <img src={"images/retweet.png"} alt={'tweet'}/>
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
