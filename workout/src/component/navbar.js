import React from "react";
import styles from "./navbar.module.css"

function Navbar(){
    return(
        <div className={styles.navbar}>
            <div>workout</div>
            <div className={styles.navpage}>
                <div className={styles.diet}>diet</div>
                <div className={styles.diary}>diary</div>
            </div>

            <div className={styles.menu}>=</div>
        </div>
    )
}
export default Navbar