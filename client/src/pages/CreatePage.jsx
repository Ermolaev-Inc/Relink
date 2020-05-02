import React, { useState, useContext, render } from "react";
import ReactDOM from 'react-dom';
import classes from "./CreatePage.module.css";
import btn from "./button.svg";
import { useHttp } from "../hooks/http.hook"; 
import { AuthContext } from "../context/AuthContext";

export const CreatePage = () => {
    const auth = useContext(AuthContext)
    const {request} = useHttp();
    const [link, setLink] = useState("");
    const pressHandler = async () => {
            try {
                const data = await request("/api/link/generate", "POST", {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                });
                const linkL = data.link.to
                const linkCard = (
                    <div className={classes.card}>
                        <a href={linkL}>{linkL}</a>
                    </div>   
                )
                ReactDOM.render(linkCard, document.getElementById('card'))
            } catch (error) {};
    };
    return(
        <div className={classes.form}>
            <input 
            className={classes.input_field}
            type="text"
            placeholder="Paste link"
            id="link"
            value={link}
            onChange={e => setLink(e.target.value)}
            onKeyPress={pressHandler}
            />
            <button onClick={pressHandler}>
                <img className={classes.btn} src={btn} alt="" />
            </button>
            <div className={classes.card_form} id="card">
            
            </div>
        </div>
    )
};