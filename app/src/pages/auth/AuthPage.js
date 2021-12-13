import React, {useState} from 'react';
import {Button, Input, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import useStyles from "./style";
import {toast} from "react-toastify";
import {loginApi, registerApi} from "../../api/auth_api";

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

        //register state
        const [fullNameRegister, setFullNameRegister] = useState()
        const [usernameRegister, setUsernameRegister] = useState()
        const [passwordRegister, setPasswordRegister] = useState()
        const [confPasswordRegister, setConfPasswordRegister] = useState()

        const validateLogin = (user) => {
            if (!user.username)
                return 'نام کاربری وارد نشده است'
            if (!user.password)
                return 'رمز عبور وارد نشده است'
        }

        const validateRegister = (user) => {
            if (!user.username)
                return 'نام کاربری وارد نشده است'
            if (!user.name)
                return 'نام وارد نشده است'
            if (!user.password)
                return 'رمز عبور وارد نشده است'
            console.log(user.password)
            console.log(user.confPasswordRegister)
            if (user.password !== user.confPasswordRegister)
                return 'رمزها مشابه نیستند'
        }

        const handleRegister = () => {
            const user = {
                name: fullNameRegister,
                username: usernameRegister,
                password: passwordRegister,
                confPasswordRegister: confPasswordRegister

            }
            const error = validateRegister(user);
            if (error)
                return toast.warn(error);
            user.confPasswordRegister = undefined;
            registerApi(user, (isOk, data) => {
                if (!isOk)
                    return toast.error(data);
                toast.success("شما با موفقیت ثبت نام شدید");
                localStorage.setItem("name", data.name);
                localStorage.setItem("username", data.username);
                localStorage.setItem("x-auth-token", data["x-auth-token"]);
            })
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
                    <Input className={"uni_m_b_small"} value={fullNameRegister}
                           onChange={e => setFullNameRegister(e.target.value)}/>
                    <Typography>نام کاربری</Typography>
                    <Input className={"uni_m_b_small"} value={usernameRegister}
                           onChange={e => setUsernameRegister(e.target.value)}/>
                    <Typography>رمز عبور</Typography>
                    <Input className={"uni_m_b_small"} value={passwordRegister}
                           onChange={e => setPasswordRegister(e.target.value)}/>
                    <Typography>تکرار رمز عبور</Typography>
                    <Input className={"uni_m_b_small"} value={confPasswordRegister}
                           onChange={e => setConfPasswordRegister(e.target.value)}/>
                    <Button variant={'contained'} color={'primary'} onClick={handleRegister}>ثبت نام</Button>
                </div>
                }
            </Paper>
        );
    }
;

export default AuthPage;
