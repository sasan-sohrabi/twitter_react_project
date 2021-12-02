import React from 'react';
import useStyles from './style';
import {ButtonBase, Divider, Grid, Typography} from "@material-ui/core";

const profileInfo = [
    {
        'name': 'سامسونگ',
        'id': '@samsung',
        'url': 'images/samsung.png',

    },
    {
        'name': 'شیاومی',
        'id': '@xiaomi',
        'url': 'images/xiaomi.png',

    },
    {
        'name': 'بیلگیتس',
        'id': '@bill',
        'url': 'images/bil.png',

    },
]

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
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"images/user_img.png"} alt={'profile'} className={classes.userImg}/>
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
                        profileInfo.map(item => <Twitter name={item.name} id={item.id} url={item.url}/>)
                    }
                    {/*<Twitter/>*/}
                </Grid>
            </Grid>
        </div>
    );
};

export default LeftSidebar;
