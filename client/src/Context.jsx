
import React, { createContext, useState } from 'react';
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const _2day = new Date().setHours(0, 0, 0, 0)
  const _2dayUTC = zonedTimeToUtc(_2day, 'America/Denver');
  const _2morrow = zonedTimeToUtc(_2day, 'America/Denver');
  _2morrow.setDate(_2dayUTC.getDate() + 1);
  const _2morrowUTC = zonedTimeToUtc(_2morrow, 'America/Denver');

  // list of useState items
  const [exampleState, setExampleState] = useState('Hello World');
  const [today, setToday] = useState(_2dayUTC);
  const [tomorrow, setTomorrow] = useState(_2morrowUTC);
  const [userId, setUserId] = useState('5');
  const [email, setEmail] = useState('');

  // Landing page states
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
    <AppContext.Provider value={{exampleState, setExampleState, userId, setUserId, email, setEmail,
      userGoals, setUserGoals, today, setToday, tomorrow, setTomorrow}}>
      {props.children}
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
