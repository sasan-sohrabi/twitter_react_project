import React from 'react';
import {ButtonBase, Grid, Typography} from "@material-ui/core";
import useStyles from './style';

const hashTag = [
    "پرچمـدارـجدید",
    "کروناـویروس",
    "سامسونگ",
    "هلوـسامر",
    "انرژی",
    "خورشیدی",
    "بهینهسازی"
];
const RightSidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction={"row"} alignItems={"center"}>
                <Grid item>
                    <img src={"images/logo.png"} alt={"logo"}/>
                </Grid>
                <Grid item>
                    <Typography component={"h1"} className={classes.logoType}>
                        توییتر فارسی
                    </Typography>
                </Grid>
            </Grid>
            <Typography component={"h1"} className={classes.hashtagTitle}>
                داغ ترین هشتگ ها
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashTag.map(item => <ButtonBase className={classes.hashtagParent}>
                        <Grid item container>
                            <img src={"images/hashtag.png"} alt="hashtag"/>
                            <Typography className={classes.hashtag}>
                                {item}
                            </Typography>
                        </Grid>
                    </ButtonBase>)
                }
            </Grid>
        </div>
    );
};

export default RightSidebar;
