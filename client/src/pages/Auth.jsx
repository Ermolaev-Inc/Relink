import React, { useState } from "react";
import classes from "./Auth.module.css";
import normalize from "./normalize.css";
import Relink_logo from "./Relink_logo.svg";
import { useHttp } from '../hooks/http.hook';
import { useEffect } from "react";

export const AuthPage = () => {
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        console.log("Some Error");

        clearError();    
    }, [error, clearError]);
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    };
    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", {...form});
            console.log("Data", data);
        } catch (error) {};
    };
    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", {...form});
            console.log("Data", data);
        } catch (error) {};
    };

    return(
        <div className={classes.auth_page__container}>
            <div className={classes.auth_page__container__title}>
                <img src={Relink_logo} alt="Please wait"/>
            </div>
            <div className={classes.auth_page__container__input_fields}>
                <div className={classes.email_input_form}>
                    <input 
                        placeholder="Email"
                        id="email"
                        type="text"
                        name="email"
                        className={classes.email_input}
                        onChange={changeHandler}
                    />
                </div>
                <div className={classes.password_input_form}>
                    <input 
                        placeholder="Password"
                        id="password"
                        type="text"
                        name="password"
                        className={classes.password_input}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className={classes.auth_page__container__actions}>
                <button 
                    className={classes.login_btn}
                    onClick={loginHandler}
                    disabled={loading}
                >Login
                </button>
                <button 
                    className={classes.create_btn}
                    onClick={registerHandler}
                    disabled={loading}
                >Create
                </button>
            </div>
        </div>
    )
};