// src/components/DietCalculator.js
import React, { useState } from 'react';

function DietCalculator() {
  const [totalCalories, setTotalCalories] = useState('');
  const [carbohydratesRatio, setCarbohydratesRatio] = useState('');
  const [proteinRatio, setProteinRatio] = useState('');
  const [fatRatio, setFatRatio] = useState('');
  const [mealRecords, setMealRecords] = useState([]);
  const [newMealName, setNewMealName] = useState('');
  const [newMealCarbs, setNewMealCarbs] = useState('');
  const [newMealProtein, setNewMealProtein] = useState('');
  const [newMealFat, setNewMealFat] = useState('');
  const [nutritionResult, setNutritionResult] = useState(null);
  const [remainingNutrition, setRemainingNutrition] = useState(null);

  const handleCalculate = () => {
    const total = parseFloat(totalCalories);
    const carbRat = parseFloat(carbohydratesRatio) / 100;
    const proteinRat = parseFloat(proteinRatio) / 100; // 수정된 부분
    const fatRat = parseFloat(fatRatio) / 100;

    const proteinCalories = total * proteinRat;
    const carbohydratesCalories = total * carbRat;
    const fatCalories = total * fatRat;

    const carbohydrates = carbohydratesCalories / 4;
    const protein = proteinCalories / 4;
    const fat = fatCalories / 9;

    setNutritionResult({ carbohydrates, protein, fat });
    setRemainingNutrition({ carbohydrates, protein, fat });
  };
 
  const addMeal = () => {
    const meal = {
      name: newMealName,
      carbs: parseFloat(newMealCarbs),
      protein: parseFloat(newMealProtein),
      fat: parseFloat(newMealFat)
    };

    setMealRecords([...mealRecords, meal]);

    // 추가 후 입력 필드를 초기화합니다.
    setNewMealName('');
    setNewMealCarbs('');
    setNewMealProtein('');
    setNewMealFat('');

    setRemainingNutrition((prevNutrition) => ({
        carbohydrates: prevNutrition.carbohydrates - meal.carbs,
        protein: prevNutrition.protein - meal.protein,
        fat: prevNutrition.fat - meal.fat
      }));
  };

  return (
    <div>
      <h1>Diet Calculator</h1>
      <div>
        <label>Total Calories:</label>
        <input type="number" value={totalCalories} onChange={(e) => setTotalCalories(e.target.value)} />
      </div>
      <div>
        <label>Carbohydrates Ratio (%):</label>
        <input type="number" value={carbohydratesRatio} onChange={(e) => setCarbohydratesRatio(e.target.value)} />
      </div>
      <div>
        <label>Protein Ratio (%):</label>
        <input type="number" value={proteinRatio} onChange={(e) => setProteinRatio(e.target.value)} />
      </div>
      <div>
        <label>Fat Ratio (%):</label>
        <input type="number" value={fatRatio} onChange={(e) => setFatRatio(e.target.value)} />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {nutritionResult && (
        <div>
          <h2>Total Nutrition Result</h2>
          <p>Carbohydrates: {nutritionResult.carbohydrates.toFixed(2)}g</p>
          <p>Protein: {nutritionResult.protein.toFixed(2)}g</p>
          <p>Fat: {nutritionResult.fat.toFixed(2)}g</p>
        </div>
      )}
      {remainingNutrition && (
        <div>
          <h2>Remaining Nutrition</h2>
          <p>Carbohydrates: {remainingNutrition.carbohydrates.toFixed(2)}g</p>
          <p>Protein: {remainingNutrition.protein.toFixed(2)}g</p>
          <p>Fat: {remainingNutrition.fat.toFixed(2)}g</p>
        </div>
      )}
      <div>
        <h2>Meal Record</h2>
        <div>
          <input type="text" value={newMealName} onChange={(e) => setNewMealName(e.target.value)} placeholder="Meal Name" />
          <input type="number" value={newMealCarbs} onChange={(e) => setNewMealCarbs(e.target.value)} placeholder="Carbs" />
          <input type="number" value={newMealProtein} onChange={(e) => setNewMealProtein(e.target.value)} placeholder="Protein" />
          <input type="number" value={newMealFat} onChange={(e) => setNewMealFat(e.target.value)} placeholder="Fat" />
          <button onClick={addMeal}>Add Meal</button>
        </div>
        <ul>
          {mealRecords.map((meal, index) => (
            <li key={index}>
              {meal.name} - Carbs: {meal.carbs}g, Protein: {meal.protein}g, Fat: {meal.fat}g
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DietCalculator;
