
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {

  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState();
  const [userGoals, setUserGoals] = useState({
    weight: null,
    water: 0,
    calories: 2000,
    protein: 0,
    carbs: 0,
    fats: 0,
    goalWeight: null,
  });

  return (
    <AppContext.Provider value={{
      userId, setUserId,
      email, setEmail,
      userGoals, setUserGoals
    }}>
    </AppContext.Provider>
  )
}


// import React, { createContext, useState } from 'react';

// export const AppContext = createContext();

// export const ContextProvider = (props) => {

//   // list of useState items
//   const [exampleState, setExampleState] = useState('Hello World');
//   const [currentWeight, setCurrentWeight] = useState(0);
//   const [waterGoal, setWaterGoal] = useState(64);
//   const [caloriesGoal, setCaloriesGoal] = useState(2000);
//   const [proteinMacrosGoal, setProteinMacrosGoal] = useState(50);
//   const [carbsMacrosGoal, setCarbsMacrosGoal] = useState(100);
//   const [fatsMacrosGoal, setFatsMacrosGoal] = useState(25);
//   const [goalWeight, setGoalWeight] = useState();


//   return (
//     <AppContext.Provider value={{
//       exampleState, setExampleState,
//       currentWeight, setCurrentWeight,
//       waterGoal, setWaterGoal,
//       caloriesGoal, setCaloriesGoal,
//       proteinMacrosGoal, setProteinMacrosGoal,
//       carbsMacrosGoal, setCarbsMacrosGoal,
//       fatsMacrosGoal, setFatsMacrosGoal,
//       goalWeight, setGoalWeight
//     }}>
//       {props.children}
//     </AppContext.Provider>
//   )
// }
