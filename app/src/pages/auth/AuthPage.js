import React, {useState} from 'react';
import {Button, Input, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import useStyles from "./style";

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const AuthPage = () => {
        const classes = useStyles(LOGIN_TAB_VALUE)

        const [tab, setTab] = useState()

        const handleChange = (e, newValue) => {
            setTab(newValue)
        }

        return (
            <Paper className={classes.container}>
                <Typography className={classes.headerText}>به توییتر خوش آمدید</Typography>
                <Tabs value={tab} onChange={handleChange} centered>
                    <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab}/>
                    <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab}/>
                </Tabs>
                {tab === LOGIN_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کاربری</Typography>
                    <Input className={"uni_m_b_small"}/>
                    <Typography>رمز عبور</Typography>
                    <Input className={"uni_m_b_small"}/>
                    <Button variant={'contained'} color={'primary'}>ورود</Button>
                </div>
                }
                {tab === REG_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کامل</Typography>
                    <Input className={"uni_m_b_small"}/>
                    <Typography>نام کاربری</Typography>
                    <Input className={"uni_m_b_small"}/>
                    <Typography>رمز عبور</Typography>
                    <Input className={"uni_m_b_small"}/>
                    <Typography>تکرار رمز عبور</Typography>
                    <Input className={"uni_m_b_small"}/>
                    <Button variant={'contained'} color={'primary'}>ثبت نام</Button>
                </div>
                }
            </Paper>
        );
    }
;

export default AuthPage;
