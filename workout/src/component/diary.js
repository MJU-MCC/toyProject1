import React from "react";

function Diary(){
    return(
        <div>
            <h3>workout routine</h3>
            <table>
                <tr>
                    <th scope="days">Sun</th>
                    <th scope="days">Mon</th>
                    <th scope="days">Tue</th>
                    <th scope="days">Wed</th>
                    <th scope="days">Thu</th>
                    <th scope="days">Fri</th>
                    <th scope="days">Sat</th>
                </tr>
                <tr>
                    <th><input type="text" placeholder="exercisepart"></input></th>
                    <th><input type="text" placeholder="exercisepart"></input></th>
                    <th><input type="text" placeholder="exercisepart"></input></th>
                    <th><input type="text" placeholder="exercisepart"></input></th>
                    <th><input type="text" placeholder="exercisepart"></input></th>
                    <th><input type="text" placeholder="exercisepart"></input></th>
                    <th><input type="text" placeholder="exercisepart"></input></th>
                </tr>
                <tr>
                    <th><input type="text" placeholder="exercise"></input></th>
                    <th><input type="text" placeholder="exercise"></input></th>
                    <th><input type="text" placeholder="exercise"></input></th>
                    <th><input type="text" placeholder="exercise"></input></th>
                    <th><input type="text" placeholder="exercise"></input></th>
                    <th><input type="text" placeholder="exercise"></input></th>
                    <th><input type="text" placeholder="exercise"></input></th>
                </tr>
            </table>
            <button>save routine</button>
        </div>
    )
}
export default Diary