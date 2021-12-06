import React from 'react';
import useStyles from './style';
import RightSidebar from "./rightSidebar/RightSidebar";
import {Divider} from "@material-ui/core";
import LeftSidebar from "./leftSidebar/LeftSidebar";


const Layout = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <div className={classes.content}>
                {props.children}
            </div>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <LeftSidebar/>
        </div>
    );
};
export default Layout;
