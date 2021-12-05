import React from 'react';
import useStyles from './style';
import RightSidebar from "./rightSidebar/RightSidebar";
import {Divider} from "@material-ui/core";
import LeftSidebar from "./leftSidebar/LeftSidebar";
import Home from "../../pages/home/Home";
import P404 from "../../pages/404/404";

import {BrowserRouter, Route} from "react-router-dom";


const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <div className={classes.content}>
                <BrowserRouter>
                    <Route exact  path={"/"} component={Home} />
                    <Route component={P404}/>
                </BrowserRouter>
            </div>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <LeftSidebar/>
        </div>
    );
};
export default Layout;
