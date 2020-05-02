import React from "react";
import classes from "./CreatePage.module.css";
import btn from "./button.svg";

export const CreatePage = () => {
    return(
        <div className={classes.form}>
            <input 
            className={classes.input_field}
            type="text"
            placeholder="Paste link"
            id="link"
            />
            <img className={classes.btn} src={btn} alt=""/>
        </div>
    )
};