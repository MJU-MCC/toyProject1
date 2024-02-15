// src/ExerciseList.js
import React from 'react';

function ExerciseList({ exercises }) {
  return (
    <div>
      <h2>Exercise List</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.exercise} - Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
