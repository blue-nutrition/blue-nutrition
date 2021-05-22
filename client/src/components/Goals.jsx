import React, { useContext, useEffect }from 'react';
import { AppContext } from '../Context.jsx';


let Goals = () => {
  const {
    exampleState, currentWeight, waterGoal,caloriesGoal, proteinMacrosGoal,carbsMacrosGoal, fatsMacrosGoal,goalWeight
  } = useContext(AppContext);

  return (
    <h2>Your Nutrition Goals!</h2>
    <button>Edit Goals</button>
    <h3>Your current weight (optional)</h3>
  
  )
}

export default Goals;