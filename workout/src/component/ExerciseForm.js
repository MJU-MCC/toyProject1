// src/ExerciseForm.js
import React, { useState } from 'react';

function ExerciseForm({ onAddExercise }) {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !sets || !reps) return;
    onAddExercise({ exercise, sets, reps });
    setExercise('');
    setSets('');
    setReps('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
}

export default ExerciseForm;
