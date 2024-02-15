import React, { useState } from "react";
import styles from "./navbar.module.css"
import { Link } from "react-router-dom";

function Navbar(){
    const [message,setMessage]=useState("welcome!")

    return(
        <div className={styles.navbar}>
            <Link to='/' className={styles.logo}>명짐</Link>
            <p>{message}</p>
            <div className={styles.navpage}>
                <Link to='/diet' className={styles.diet}>diet</Link>
                <Link to='/diary' className={styles.diary}>diary</Link>
            </div>

            <div className={styles.menu}>=</div>
        </div>
    )
}
export default Navbar