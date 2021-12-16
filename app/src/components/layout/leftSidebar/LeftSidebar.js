import React, {useEffect, useState} from 'react';
import useStyles from './style';
import {ButtonBase, Divider, Grid, Menu, MenuItem, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {getUsers} from "../../../api/api_tweet";


const Twitter = ({name, id, url}) => {
    const classes = useStyles();
    return <ButtonBase><Grid container style={{marginTop: '0.9rem'}}>
        <img src={url} alt={'profile'} className={classes.userImg}/>
        <Grid item container direction={"column"} style={{width: 'max-content'}} className={classes.profText}>
            <Typography className={classes.profName}>
                {name}
            </Typography>
            <Typography className={classes.profId}>
                {id}
            </Typography>
        </Grid>
    </Grid>
    </ButtonBase>
}

const LeftSidebar = () => {

    const [users, setUsers] = useState([]);
    const [anchorMenu, setAnchorMenu] = useState([]);

    useEffect(() => {
        getUsers((isOk, data) => {
            if (!isOk)
                return alert(data.message)
            else setUsers(data)
        })
    }, []);

    const handleToggleMenu = (e) => {
        if (anchorMenu)
            setAnchorMenu(null)
        else
            setAnchorMenu(e.currentTarget)
    };

    const getImage = () => {
        if (localStorage.getItem("image"))
            return localStorage.getItem("image")
        return "/images/user-profiles.png"
    }

    const getImageTwitter = (url) => {
        if (url)
            return url
        return "/images/user-profiles.png"
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"} onClick={handleToggleMenu} style={{cursor: 'pointer'}}>
                <img src={getImage()} alt={'profile'} className={classes.userImg}/>
                <Grid item container direction={"column"} style={{width: 'max-content'}} alignItems={"flex-start"} className={classes.profText}>
                    <Typography className={classes.profName}>
                        {localStorage.getItem("name")}
                    </Typography>
                    <Typography className={classes.profId}>
                        {localStorage.getItem("username")}
                    </Typography>
                </Grid>
                <Grid item container direction={"column"} className={classes.twitterRoot}>
                    <Typography className={classes.twitterTitle}>
                        بهترین خبرنگاران
                    </Typography>
                    <Divider style={{marginLeft: -24, marginRight: -24, marginTop: '.5rem'}}/>
                    {
                        users.map(item => <Link to={`/users/${item.name}`}><Twitter name={item.name} id={item.username}
                                                                                    url={getImageTwitter(item.image)}/></Link>)
                    }
                </Grid>
            </Grid>
            <Menu open={Boolean(anchorMenu)} onClose={() => setAnchorMenu(null)} anchorEl={anchorMenu}>
                <MenuItem onClick={() => {
                    localStorage.clear();
                    window.location.reload()
                }}>خروج</MenuItem>
            </Menu>
        </div>
    );
};

export default LeftSidebar;
