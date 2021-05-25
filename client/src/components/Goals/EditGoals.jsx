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

// import React, { useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { AppContext } from '../../Context.jsx';


// const EditGoals = ({ handleClose }) => {
//   const {
//     currentWeight, setCurrentWeight, waterGoal, setWaterGoal, caloriesGoal, setCaloriesGoal, proteinMacrosGoal, setProteinMacrosGoal, carbsMacrosGoal, setCarbsMacrosGoal, fatsMacrosGoal, setFatsMacrosGoal, goalWeight, setGoalWeight
//   } = useContext(AppContext);

//   const [editedWeight, setEditedWeight] = useState(currentWeight);
//   const [editedWaterGoal, setEditedWaterGoal] = useState(waterGoal);
//   const [editedCaloriesGoal, setEditedCaloriesGoal] = useState(caloriesGoal);
//   const [editedProteinMacrosGoal, setEditedProteinMacrosGoal] = useState(proteinMacrosGoal);
//   const [editedCarbsMacrosGoal, setEditedCarbsMacrosGoal] = useState(carbsMacrosGoal);
//   const [editedFatsMacrosGoal, setEditedFatsMacrosGoal] = useState(fatsMacrosGoal);
//   const[editedGoalWeight, setEditedGoalWeight] = useState(goalWeight);

//   const postData = {
//     user,
//     currentWeight: editedWeight,
//     waterGoal: editedWaterGoal,
//     caloriesGoal: editedCaloriesGoal,
//     proteinMacrosGoal: editedProteinMacrosGoal,
//     carbsMacrosGoal: editedCarbsMacrosGoal,
//     fatsMacrosGoal: editedFatsMacrosGoal,
//     goalWeight: editedGoalWeight
//   }

//   const setGoals = (postData) => {
//     axios.post('/goals', postData)
//       .then(results => {
//         setCurrentWeight(editedWeight);
//         setWaterGoal(editedWaterGoal);
//         setCaloriesGoal(editedCaloriesGoal);
//         setProteinMacrosGoal(editedProteinMacrosGoal);
//         setCarbsMacrosGoal(editedCarbsMacrosGoal);
//         setFatsMacrosGoal(editedFatsMacrosGoal);
//         setGoalWeight(editedGoalWeight);
//         handleClose();
//       });
//   }

//   return (
//     <div>
//       <h1>Edit Your Goals</h1>
//       <form>
//         <label>
//           <h2>Update your current weight:</h2>
//         </label>
//         <input
//           name="currentWeight"
//           type="number"
//           value={editedWeight}
//           onChange={(e) => {setEditedWeight(e.target.value)}}
//         >
//         </input>
//         <h2>Set Your Daily Goals</h2>
//         <label>
//           <h3>Water Consumption</h3>
//         </label>
//         <input
//           name="waterGoal"
//           type="number"
//           value={editedWaterGoal}
//           onChange={(e) => {setEditedWaterGoal(e.target.value)}}
//         >
//         </input>
//         <label>
//           <h3>Caloric Intake</h3>
//         </label>
//         <input
//           name="caloriesGoal"
//           type="number"
//           value={editedCaloriesGoal}
//           onChange={(e) => {setEditedCaloriesGoal(e.target.value)}}
//         >
//         </input>
//         <label>
//           <h3>Protein Macros</h3>
//         </label>
//         <input
//           name="proteinMacrosGoal"
//           type="number"
//           value={editedProteinMacrosGoal}
//           onChange={(e) => {setEditedProteinMacrosGoal(e.target.value)}}
//         >
//         </input>
//         <label>
//           <h3>Carbohydrate Macros</h3>
//         </label>
//         <input
//           name="carbsMacrosGoal"
//           type="number"
//           value={editedCarbsMacrosGoal}
//           onChange={(e) => {setEditedCarbsMacrosGoal(e.target.value)}}
//         >
//         </input>
//         <label>
//           <h3>Fats Macros</h3>
//         </label>
//         <input
//           name="fatsMacrosGoal"
//           type="number"
//           value={editedFatsMacrosGoal}
//           onChange={(e) => {setEditedFatsMacrosGoal(e.target.value)}}
//         >
//         </input>
//         <label>
//           <h3>Goal Weight</h3>
//         </label>
//         <input
//           name="goalWeight"
//           type="number"
//           value={editedGoalWeight}
//           onChange={(e) => {setEditedGoalWeight(e.target.value)}}
//         >
//         </input>
//         <button
//           type="submit"
//           onClick={}
//         >Update Goals</button>
//       </form>
//     </div>
//   )
// }

// export default EditGoals;