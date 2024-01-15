import React from "react";
import styles from "./login.module.css"


function Login(){
    return(
        <div className={styles.logininfo}>
            <input type="text" id={styles.userid} className={styles.user}></input>
            <input type="password" id={styles.userpassword} className={styles.user}></input>
            <button type="submit" className={styles.button}>log in</button>
        </div>
    )
}
export default Login