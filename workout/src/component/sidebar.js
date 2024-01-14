import React from "react";
import styles from "./sidebar.module.css"

function Sidebar(){
    return(
        <div className={styles.sidebar}>
            <input type="text" id={styles.userid}></input>
            <input type="text" id={styles.userpassword}></input>
            <div className={styles.buttons}>
                <button className={styles.signin} type="submit">sign in</button>
                <button className={styles.signup} type="submit">sign up</button>
            </div>
        </div>
    )
}
export default Sidebar