import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import classes from "./Navbar.module.css";
import normalize from "../pages/normalize.css";
import Logo from "./Relink.svg"
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };
    return(
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <img src={Logo} className={classes.container__logo} width="100"alt=":("/>
                <ul>
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Leave</a></li>
                </ul>
            </div>
        </div>
    )
};