import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../Context.jsx';

const EditGoals = ({ handleClose }) => {
  const {
    currentWeight, setCurrentWeight, setWaterGoal,setCaloriesGoal, setProteinMacrosGoal,setCarbsMacrosGoal, setFatsMacrosGoal,setGoalWeight
  } = useContext(AppContext);

  const postData = {
    // currentWeight,
    // waterGoal,
    // caloriesGoal,
    // proteinMacrosGoal,
    // carbsMacrosGoal,
    // fatsMacrosGoal,
    // goalWeight
  }

  return (
    <div>
      <h1>Edit Your Goals</h1>
      <form>
        <label>
          <h2>Update your current weight:</h2>
        </label>
        <input
          name="currentWeight"
          type="number"
          value={currentWeight}
        >
        </input>
        <label>
          <h2>Set Your Daily Goals:</h2>
        </label>
        <input
          name="waterGoals"
          type="number"
          value={currentWeight}
        >
        </input>
      </form>
       {/* {currentWeight} lbs (optional)</h2>
      <h2>Your Goals</h2>
      <h3>Water Consumption {waterGoal} oz</h3>
      <h3>Caloric Intake {caloriesGoal} kcal</h3>
      <h3>Protein Macros {proteinMacrosGoal} g</h3>
      <h3>Carbohydrate Macros {carbsMacrosGoal} g</h3>
      <h3>Fat Macros {fatsMacrosGoal} g</h3>
      <h3>Goal Weight {goalWeight} lbs</h3> */}
    </div>
  )
}

export default EditGoals;