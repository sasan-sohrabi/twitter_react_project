import React from 'react';
import {Typography} from "@material-ui/core";
import useStyles from "./style";

const Header = ({title, icon}) => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            {icon}
            <Typography style={{marginRight: '0.5rem', fontSize: '1.2rem', fontWeight: 600}}>
                {title}
            </Typography>
        </div>
    );
};

export default Header;
