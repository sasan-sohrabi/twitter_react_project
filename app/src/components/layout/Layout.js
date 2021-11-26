import React from 'react';
import useStyles from './style';


const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.rightSidebar}>
                right side bar
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
