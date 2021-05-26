
import React, { createContext, useState } from 'react';
import axios from 'axios';
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
  const [userId, setUserId] = useState(5);
  const [email, setEmail] = useState();

  // Landing page states
  const [loggedIn, setLoggedIn] = useState(false);
  const [userGoals, setUserGoals] = useState({
    weight: null,
    water: 0,
    calories: 2000,
    protein: 0,
    carbs: 0,
    fats: 0,
    goalWeight: null,
  });

  const postUser = (userData, weightData, cb = () => {}) => {
    axios.post('/data/users', userData)
      .then(userResults => {
        console.log("USER RESULTS", userResults)
        axios.post('/data/weight', weightData)
        .then(weightResults => {
          console.log("WEIGHT RESULTS", weightResults);
          setUserGoals({
            weight: weightData.weight,
            water: userData.goals.water,
            calories: userData.goals.calories,
            protein: userData.goals.protein,
            carbs: userData.goals.carbs,
            fats: userData.goals.fats,
            goalWeight: userData.goals.goalWeight,
          })
          cb();
        })
      });
  }

  return (
    <AppContext.Provider value={{exampleState, setExampleState, userId, setUserId, email, setEmail,
      userGoals, setUserGoals, postUser, today, setToday, tomorrow, setTomorrow,
      loggedIn, setLoggedIn}}>
      {props.children}
    </AppContext.Provider>
  )
}


