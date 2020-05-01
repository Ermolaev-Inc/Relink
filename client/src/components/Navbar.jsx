import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";
import normalize from "../pages/normalize.css";
import Logo from "./Relink.svg"

export const Navbar = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <img src={Logo} className={classes.container__logo} width="100"alt=":("/>
                <ul>
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><a href="/">Leave</a></li>
                </ul>
            </div>
        </div>
    )
};