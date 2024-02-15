// src/components/ExerciseCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ExerciseForm from './ExerciseForm';
import ExerciseList from './ExerciseList';

function ExerciseCalendar() {
  const [date, setDate] = useState(new Date());
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, { ...exercise, date }]);
  };

  return (
    <div>
      <h1>Exercise Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
        <ExerciseForm onAddExercise={addExercise} />
      </div>
      <ExerciseList exercises={exercises.filter((exercise) => exercise.date.toDateString() === date.toDateString())} />
    </div>
  );
}

export default ExerciseCalendar;
