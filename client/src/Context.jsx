/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

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
  const [userId, setUserId] = useState();
  const [email, setEmail] = useState();


  // Landing page states
  const [loggedIn, setLoggedIn] = useState();
  const [userGoals, setUserGoals] = useState({
    weight: null,
    water: 100,
    calories: 2000,
    protein: 75,
    carbs: 150,
    fats: 50,
    goalWeight: null,
  });

  const postUser = (userData, weightData, cb = () => {}) => {
    axios.post('/data/users', userData)
      .then(userResults => {
        // console.log("USER RESULTS", userResults)
        axios.post('/data/weight', weightData)
        .then(weightResults => {
          // console.log("WEIGHT RESULTS", weightResults);
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

  const getUser = (cb = () => {}) => {
    axios.get('/data/users', {params: {userId: userId}})
      .then(userResults => {
        // console.log(userResults);
        const goals = userResults.data.goals
        if (goals) {
          setUserGoals({
            ...userGoals,
            water: goals.water,
            calories: goals.calories,
            protein: goals.protein,
            carbs: goals.carbs,
            fats: goals.fats,
            goalWeight: goals.goalWeight,
          })
          cb();
        }
      })
  };

  return (
    <AppContext.Provider value={{exampleState, setExampleState, userId, setUserId, email, setEmail,
      userGoals, setUserGoals, postUser, today, setToday, tomorrow, setTomorrow,
      loggedIn, setLoggedIn, getUser}}>
      {props.children}
    </AppContext.Provider>
  )
}


