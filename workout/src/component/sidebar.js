import React, { useState } from "react";
import styles from "./sidebar.module.css"
import Login from "./login";

function Sidebar(){

    let [login,setLogin]=useState(false);

    return(
        <div className={styles.sidebar}>
            <div className={styles.buttons}>
                {login===true?<Login/>:null}
                <button className={styles.signin} type="submit" onClick={()=>{setLogin(!login)}}>sign in</button>
                <button className={styles.signup} type="submit">sign up</button>
            </div>
        </div>
        
    )
}
export default Sidebar