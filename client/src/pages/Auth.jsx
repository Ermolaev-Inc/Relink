import React, { useState } from "react";
import classes from "./Auth.module.css";
import normalize from "./normalize.css";
import ReactDOM from 'react-dom';
import Relink_logo from "./Relink_logo.svg";
import { useHttp } from '../hooks/http.hook';
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        clearError();    
    }, [error, clearError]);
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    };
    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", {...form});
            console.log("Data", data);
        } catch (error) {
            errorHandler(error.message);
        };
    };
    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", {...form});
            auth.login(data.token, data.userId);
        } catch (error) {
            errorHandler(error.message);
        };
    };
    const errorHandler = message => {
        const errorForm = (
            <div className={classes.form}>
                <div className={classes.form_header}>Error</div>
                <div className={classes.form_text}>{message}</div>
            </div>
        );
        ReactDOM.render(errorForm, document.getElementById("error"));
    };

    return(
        <div className={classes.auth_page}>
            <div className={classes.auth_page__container}>
                <div className={classes.auth_page__container__title}>
                    <img src={Relink_logo} alt="Please wait"/>
                </div>
                <div className={classes.auth_page__container__input_fields}>
                    <div className={classes.email_input_form}>
                        <input 
                            required
                            placeholder="Login"
                            id="email"
                            type="text"
                            name="email"
                            value={form.email}
                            className={classes.email_input}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className={classes.password_input_form}>
                        <input 
                            required
                            placeholder="Password"
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
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
            <div className={classes.auth_page__error_positon} id="error">
    
            </div>
        </div>
    )
};