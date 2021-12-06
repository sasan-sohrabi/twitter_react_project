import React, {useEffect, useState} from 'react';
import useStyles from './style';
import {ButtonBase, Divider, Grid, Typography} from "@material-ui/core";
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

    useEffect(() => {
        getUsers((isOk, data)=>{
            if(!isOk)
                return alert(data.message)
            else setUsers(data)
        })
    }, []);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"/images/user_img.png"} alt={'profile'} className={classes.userImg}/>
                <Grid item container direction={"column"} style={{width: 'max-content'}} className={classes.profText}>
                    <Typography className={classes.profName}>
                        ساسان سهرابی
                    </Typography>
                    <Typography className={classes.profId}>
                        Sasan.Sohrabi
                    </Typography>
                </Grid>
                <Grid item container direction={"column"} className={classes.twitterRoot}>
                    <Typography className={classes.twitterTitle}>
                        بهترین خبرنگاران
                    </Typography>
                    <Divider style={{marginLeft: -24, marginRight: -24, marginTop: '.5rem'}}/>
                    {
                        users.map(item => <Link to={`/users/${item.name}`}><Twitter name={item.name} id={item.id}
                                                                                          url={item.url}/></Link>)
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default LeftSidebar;
