// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
// import styles from "./diary.module.css"


// function Diary(){
//     const [date, setDate] = useState(new Date());
    
//     const onChange = (date) => {
//         setDate(date);
//     };

//     return (
//         <div>
//           <h1>workout diary</h1>
//           <Calendar
//             onChange={onChange}
//             value={date}
//             className={styles.Calendar}
//           />
//           <h1>today workout</h1>
//           <input type="text" placeholder="exercise"></input>
//           <input type="text" placeholder="set"></input>
//           <input type="text" placeholder="reps"></input>
//           <button>+</button>
//         </div>
//     );
// };
// export default Diary
// src/App.js
// src/App.js
import React from 'react';
import ExerciseCalendar from './ExerciseCalendar';

function Diary() {
  return (
    <div className="Diary">
      <ExerciseCalendar />
    </div>
  );
}

export default Diary;
