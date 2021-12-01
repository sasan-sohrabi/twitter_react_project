import React from 'react';
import useStyles from './style';
import {Typography} from "@material-ui/core";


const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.rightSidebar}>
                <Typography component="h1">
                    منوی سمت راست
                </Typography>
            </div>
            <div className={classes.mainPart}>
                main part
            </div>
            <div className={classes.leftSidebar}>
                left side bar
            </div>
        </div>
    );
};

export default Layout;
