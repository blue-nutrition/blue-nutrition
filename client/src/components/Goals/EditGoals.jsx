import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../../Context.jsx';


const EditGoals = ({ handleClose }) => {
  const {
    today, email, password, userId, userGoals, setUserGoals
  } = useContext(AppContext);

  const [editedWeight, setEditedWeight] = useState(userGoals.weight)
  const [editedGoals, setEditedGoals] = useState({
    water: userGoals.water,
    calories: userGoals.calories,
    protein: userGoals.protein,
    carbs: userGoals.carbs,
    fats: userGoals.fats,
    goalWeight: userGoals.goalWeight
  })

  const weightData = {
    userId,
    weight: editedWeight,
    date: today,
  }

  const userData = {
    email,
    password,
    goals: editedGoals
  }

  const setUser = (userData, weightData) => {
    axios.post('/user', userData)
      .then(results => {
        axios.post('/weight', weightData)
        .then(results => {
          setWeight(editedWeight);
          setWaterGoal(editedWater);
          setCaloriesGoal(editedCalories);
          setProteinGoal(carbsGoal);
          setCarbsGoal(editedCarbs);
          setFatsGoal(editedFats);
          setGoalWeight(editedGoalWeight);
          handleClose();
        })
      });
  }

  return (
    <div>
      <h1>Edit Your Goals</h1>
      <form>
        <label>
          <h2>Update your current weight:</h2>
        </label>
        <input
          name="weight"
          type="number"
          value={editedGoals.weight}
          onChange={(e) => {setEditedGoals(editedGoals.weight = e.target.value)}}
        >
        </input>
        <h2>Set Your Daily Goals</h2>
        <label>
          <h3>Water Consumption</h3>
        </label>
        <input
          name="waterGoal"
          type="number"
          value={editedGoals.water}
          onChange={(e) => {setEditedGoals(editedGoals.water = e.target.value)}}
        >
        </input>
        <label>
          <h3>Caloric Intake</h3>
        </label>
        <input
          name="caloriesGoal"
          type="number"
          value={editedGoals.calories}
          onChange={(e) => {setEditedGoals(editedGoals.calories = e.target.value)}}
        >
        </input>
        <label>
          <h3>Protein Macros</h3>
        </label>
        <input
          name="proteinMacrosGoal"
          type="number"
          value={editedGoals.protein}
          onChange={(e) => {setEditedGoals(editedGoals.protein = e.target.value)}}
        >
        </input>
        <label>
          <h3>Carbohydrate Macros</h3>
        </label>
        <input
          name="carbsGoal"
          type="number"
          value={editedGoals.carbs}
          onChange={(e) => {setEditedGoals(editedGoals.carbs = e.target.value)}}
        >
        </input>
        <label>
          <h3>Fats Macros</h3>
        </label>
        <input
          name="fatsGoal"
          type="number"
          value={editedGoals.fats}
          onChange={(e) => {setEditedGoals(editedGoals.fats = e.target.value)}}
        >
        </input>
        <label>
          <h3>Goal Weight</h3>
        </label>
        <input
          name="goalWeight"
          type="number"
          value={editedGoals.goalWeight}
          onChange={(e) => {setEditedGoals(editedGoals.goalWeight = e.target.value)}}
        >
        </input>
        <button
          type="submit"
          onClick={setUser}
        >Update Goals</button>
      </form>
    </div>
  )
}

export default EditGoals;
