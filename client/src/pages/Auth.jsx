import React from "react";
import classes from "./Auth.module.css";
import normalize from "./normalize.css";
import Relink_logo from "./Relink_logo.svg"

export const AuthPage = () => {
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
                    />
                </div>
                <div className={classes.password_input_form}>
                    <input 
                        placeholder="Password"
                        id="password"
                        type="text"
                        name="password"
                        className={classes.password_input}
                    />
                </div>
            </div>
            <div className={classes.auth_page__container__actions}>
                <button className={classes.login_btn}>Login</button>
                <button className={classes.create_btn}>Create</button>
            </div>
        </div>
    )
};