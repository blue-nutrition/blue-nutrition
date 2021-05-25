import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../../Context.jsx';
import Button from '@material-ui/core/Button';


const EditGoals = ({ handleClose }) => {
  const {
    today, email, password, userId, userGoals, setUserGoals, postUser
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

  // sample data
  // {
  //   water: 64,
  //   calories: 2000,
  //   protein: 50,
  //   carbs: 120,
  //   fats: 30,
  //   goalWeight: 135
  // }

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

  const updateGoals = (e) => {
    e.preventDefault();

    postUser(userData, weightData, handleClose)
  }

  const handleChange = (prop) => (e) => {
    setEditedGoals({...editedGoals, [prop]: e.target.value });
  }

  return (
    <div>
      <h1>Edit Your Goals</h1>
      <form>
        <label>
          <h2>Update your current weight:</h2>
        </label>
        <input
          name="editedWeight"
          type="number"
          value={editedWeight}
          onChange={(e) => {setEditedWeight(e.target.value)}}
        >
        </input>
        <h2>Set Your Daily Goals</h2>
        <label>
          <h3>Water Consumption</h3>
        </label>
        <input
          name="water"
          type="number"
          value={editedGoals.water}
          onChange={handleChange("water")}
        >
        </input>
        <label>
          <h3>Caloric Intake</h3>
        </label>
        <input
          name="calories"
          type="number"
          value={editedGoals.calories}
          onChange={handleChange("calories")}
        >
        </input>
        <label>
          <h3>Protein Macros</h3>
        </label>
        <input
          name="protein"
          type="number"
          value={editedGoals.protein}
          onChange={handleChange("protein")}
        >
        </input>
        <label>
          <h3>Carbohydrate Macros</h3>
        </label>
        <input
          name="carbs"
          type="number"
          value={editedGoals.carbs}
          onChange={handleChange("carbs")}
        >
        </input>
        <label>
          <h3>Fats Macros</h3>
        </label>
        <input
          name="fats"
          type="number"
          value={editedGoals.fats}
          onChange={handleChange("fats")}
        >
        </input>
        <label>
          <h3>Goal Weight</h3>
        </label>
        <input
          name="goalWeight"
          type="number"
          value={editedGoals.goalWeight}
          onChange={handleChange("goalWeight")}
        >
        </input>
        <br></br>
        <Button
          type="button"
          onClick={updateGoals}
        >Update Goals</Button>
      </form>
    </div>
  )
}

export default EditGoals;
