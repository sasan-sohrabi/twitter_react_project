import React, {useState} from 'react';
import {Button, Input, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import useStyles from "./style";
import {toast} from "react-toastify";
import {loginApi} from "../../api/auth_api";

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const AuthPage = () => {
        const classes = useStyles(LOGIN_TAB_VALUE)

        const [tab, setTab] = useState()

        const handleChange = (e, newValue) => {
            setTab(newValue)
        }

        //login state
        const [usernameLogin, setUsernameLogin] = useState()
        const [passwordLogin, setPasswordLogin] = useState()

        const validateLogin = (user) => {
            if (!user.username)
                return 'نام کاربری وارد نشده است'
            if (!user.password)
                return 'رمز عبور وارد نشده است'
        }

        const handleLogin = () => {
            const user = {
                username: usernameLogin,
                password: passwordLogin
            };
            const error = validateLogin(user);
            if (error)
                return toast.warn(error)
            loginApi(user, (isOk, data) => {
                if (!isOk)
                    return toast.error(data);
                toast.success("شما با موفقیت وارد شدید");
                localStorage.setItem("name", data.name);
                localStorage.setItem("username", data.username);
                localStorage.setItem("x-auth-token", data["x-auth-token"]);
            })
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
                    <Input className={"uni_m_b_small"} value={usernameLogin}
                           onChange={e => setUsernameLogin((e.target.value))}/>
                    <Typography>رمز عبور</Typography>
                    <Input className={"uni_m_b_small"} value={passwordLogin}
                           onChange={e => setPasswordLogin((e.target.value))}/>
                    <Button variant={'contained'} color={'primary'} onClick={handleLogin}>ورود</Button>
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
