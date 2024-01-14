import React from "react";
import styles from "./login.module.css"


function Login(){
    return(
        <div>
            <input type="text" id={styles.userid} className={styles.user}></input>
            <input type="text" id={styles.userpassword} className={styles.user}></input>
        </div>
    )
}
export default Login