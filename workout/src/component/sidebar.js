import React from "react";

function Sidebar(){
    return(
        <div className="side-bar">
            <input type="text" id="userid"></input>
            <input type="text" id="userpassword"></input>
            <div className="buttons">
                <button className="signin" type="submit">sign in</button>
                <button className="signup" type="submit">sign up</button>
            </div>
        </div>
    )
}
export default Sidebar