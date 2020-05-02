import React from "react";
import classes from "./Footer.module.css";
import github from "./Github_logo.svg";
import telegram from "./Telegram_logo.svg";
import vk from "./Vk_logo.svg";
import ermolaev from "./Ermolaev_watermark.png";

export const Footer = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <img src={github} className={classes.icon} alt=""/>
                <img src={telegram} className={classes.icon} alt=""/>
                <img src={vk} className={classes.icon_vk} alt=""/>
                <img src={ermolaev} className={classes.ermolaev} width="604" height="27" alt=""/>
            </div>
        </div>
    )
};