import React from 'react';

function MealRecord({ meal, index }) {
  return (
    <li key={index}>
      {meal.name} - Carbs: {meal.carbs}g, Protein: {meal.protein}g, Fat: {meal.fat}g
    </li>
  );
}

export default MealRecord;