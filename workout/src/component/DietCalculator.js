// src/components/DietCalculator.js
import React, { useState } from 'react';

function DietCalculator() {
  const [totalCalories, setTotalCalories] = useState('');
  const [carbohydratesRatio, setCarbohydratesRatio] = useState('');
  const [proteinRatio, setProteinRatio] = useState('');
  const [fatRatio, setFatRatio] = useState('');
  const [nutritionResult, setNutritionResult] = useState(null);

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
          <h2>Nutrition Result</h2>
          <p>Carbohydrates: {nutritionResult.carbohydrates.toFixed(2)}g</p>
          <p>Protein: {nutritionResult.protein.toFixed(2)}g</p>
          <p>Fat: {nutritionResult.fat.toFixed(2)}g</p>
        </div>
      )}
    </div>
  );
}

export default DietCalculator;
