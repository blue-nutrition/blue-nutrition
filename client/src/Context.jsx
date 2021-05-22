import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {

  // list of useState items
  const [exampleState, setExampleState] = useState('Hello World');
  const [currentWeight, setCurrentWeight] = useState(0);
  const [waterGoal, setWaterGoal] = useState(64);
  const [caloriesGoal, setCaloriesGoal] = useState(2000);
  const [proteinMacrosGoal, setProteinMacrosGoal] = useState(50);
  const [carbsMacrosGoal, setCarbsMacrosGoal] = useState(100);
  const [fatsMacrosGoal, setFatsMacrosGoal] = useState(25);
  const [goalWeight, setGoalWeight] = useState();


  return (
    <AppContext.Provider value={{
      exampleState, setExampleState,
      currentWeight, setCurrentWeight,
      waterGoal, setWaterGoal,
      caloriesGoal, setCaloriesGoal,
      proteinMacrosGoal, setProteinMacrosGoal,
      carbsMacrosGoal, setCarbsMacrosGoal,
      fatsMacrosGoal, setFatsMacrosGoal,
      goalWeight, setGoalWeight
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
