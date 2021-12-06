import React, {useEffect, useState} from 'react';
import {ButtonBase, Grid, Typography} from "@material-ui/core";
import useStyles from './style';
import {Link} from "react-router-dom";
import axios from "axios";


const RightSidebar = () => {
    const classes = useStyles();
    const [hashtags, setHashtags] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/hashtags")
            .then(response => {
                const data = response.data;
                setHashtags(data);
            }).catch(error => {
        })
    }, []);
    return (
        <div className={classes.root}>
            <Link to={"/"}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <Grid item>
                        <img src={"/images/logo.png"} alt={"logo"}/>
                    </Grid>
                    <Grid item>
                        <Typography component={"h1"} className={classes.logoType}>
                            توییتر فارسی
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography component={"h1"} className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashtags.map(item => <ButtonBase className={classes.hashtagParent}>
                        <Link to={"/hashtags/" + item} style={{width: '100%'}}>
                            <Grid item container>
                                <img src={"/images/hashtag.png"} alt="hashtag"/>
                                <Typography className={classes.hashtag}>
                                    {item}
                                </Typography>
                            </Grid>
                        </Link>
                    </ButtonBase>)
                }
            </Grid>
        </div>
    );
};

export default RightSidebar;
