import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calender.css';
import moment from 'moment';

export const StyledCalendarWrapper=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    position:relative;
`
export const StyledCalendar=styled(Calendar)``;


function Diary(){
    const [value,onChange]=useState(new Date());

    return(
        <div>
            <Calendar onChange={handleDateChange} value={value}></Calendar>
        </div>
    )
    // function addExercise(){
    //     return(
    //         <tr>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //             </tr>
    //     )
    // }
    // return(
    //     <div>
    //         <h3>workout routine</h3>
    //         <table>
    //             <tr>
    //                 <th scope="days">Sun</th>
    //                 <th scope="days">Mon</th>
    //                 <th scope="days">Tue</th>
    //                 <th scope="days">Wed</th>
    //                 <th scope="days">Thu</th>
    //                 <th scope="days">Fri</th>
    //                 <th scope="days">Sat</th>
    //             </tr>
    //             <tr>
    //                 <th><input type="text" placeholder="exercisepart"></input></th>
    //                 <th><input type="text" placeholder="exercisepart"></input></th>
    //                 <th><input type="text" placeholder="exercisepart"></input></th>
    //                 <th><input type="text" placeholder="exercisepart"></input></th>
    //                 <th><input type="text" placeholder="exercisepart"></input></th>
    //                 <th><input type="text" placeholder="exercisepart"></input></th>
    //                 <th><input type="text" placeholder="exercisepart"></input></th>
    //             </tr>
    //             <tr>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //                 <th><input type="text" placeholder="exercise"></input></th>
    //             </tr>
    //             <tr>
    //                 <th><button>+</button></th>
    //                 <th><button>+</button></th>
    //                 <th><button>+</button></th>
    //                 <th><button>+</button></th>
    //                 <th><button>+</button></th>
    //                 <th><button>+</button></th>
    //                 <th><button>+</button></th>
    //             </tr>
    //         </table>
    //         <button>save routine</button>
    //     </div>
    // )
}
export default Diary