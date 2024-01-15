import React from "react";
import Sidebar from "./sidebar";
import {BrowserRouter,Route,Routes}from "react-router-dom"
import styles from "./main.module.css"

function Main(){
    return(
        <div className={styles.homepage}>
            <div>
                main info
            </div>
            <Sidebar/>
        </div>
    )
}
export default Main