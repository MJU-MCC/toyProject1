import React, { useState } from "react";
import styles from "./sidebar.module.css"
import Login from "./login";
import { Link } from "react-router-dom";

function Sidebar(){

    let [login,setLogin]=useState(false);

    return(
        <div className={styles.sidebar}>
            <div className={styles.buttons}>
                {login===true?<Login/>:null}
                <button className={styles.signin} onClick={()=>{setLogin(!login)}}>sign in</button>
                <Link to="/signup" className={styles.signup}>sign up</Link>
            </div>
        </div>
        
    )
}
export default Sidebar