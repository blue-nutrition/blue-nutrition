import React, { useContext, useState, useEffect }from 'react';
import { AppContext } from '../../Context.jsx';
import AtAGlance from './AtAGlance.jsx';
import Meal from './Meal.jsx';
const axios = require('axios');

const foodQuotesGoalsMet = [
  'If you keep good food in your fridge, you will eat good food - Errick McAdams, Personal Trainer',
  'Your diet is a bank account. Good food choices are good investments. - Bethany Frankel, Entrepreneur',
  'Success is the sum of small efforts, repeated day in and day out - Robert Collier, Author'
]

const foodQuotesGoalMissed = [
  "Sorry, there's no magic bullet. You gotta eat healty and live healthy to be healthy and look healthy. End of story. - Morgan Spurlock, Documentarian",
  "You might have to fight a battle more than once to win it - Margaret Thatcher, Former UK Prime Minister",
  "Take care of your body. It's the only place you have to live. - Jim Rohn, Author",
  "The only way to keep your health is to eat what you don't want, drink what you don't like, an do what you'd rather not - Mark Twain",
  "Those who think they have no time for healthy eating will sooner or later have to find time for illness - Edward Stanley"
]

const waterQuotes = [
  "Thousands have lived without love. Not one without water - W.H. Auden",
  "I believe that water is the only drink for a wise man. - Henry David Thoreau",
  "I watched the piles of feces go up the conveyor belt… They made their way through the machine… A few minutes later I took a long taste of the end result: a glass of delicious drinking water. ― Bill Gates"
]

const Today = () => {
  const { today, tomorrow, userId, userGoals } = useContext(AppContext);
  const [water, setWaterData] = useState({});
  const [totalWater, setTotalWater] = useState(0);
  const [food, setFoodData] = useState({'Breakfast': [], 'Lunch': [], 'Dinner': []});
  const [totalCals, setTotalCals] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);
  const [goalsStatus, setGoalsStatus] = useState({});

  const getWater = () => {
    axios.get('/data/water', { params: {userId: userId, startDate: today, endDate: tomorrow}})
    .then((response) => {
      let formattedWaterData = { 'Breakfast': 0, 'Lunch': 0, 'Dinner': 0};
      let waterTotal = 0;
      response.data.forEach((res) => {
        formattedWaterData[res.meal] = res.oz
        waterTotal += res.oz;
      })
      setWaterData(formattedWaterData);
      setTotalWater(waterTotal);
      if (waterTotal >= userGoals.water && goalsStatus.water.met === false && goalsStatus.water.notified === false) {
        let newGoalsStatus = {...goalsStatus};
        newGoalsStatus.water.met = true;
        newGoalsStatus.water.notified = true;
        axios.put('/data/goals', newGoalsStatus)
        .then((response) => {
          setGoalsStatus(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
        let quote = waterQuotes[Math.floor(Math.random()*waterQuotes.length)];
        alert(quote);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const getFood = () => {
    axios.get('/data/food', { params: {userId: userId, startDate: today, endDate: tomorrow}})
    .then((response) => {
      let formattedFoodData = { 'Breakfast': [], 'Lunch': [], 'Dinner': []};
      let calorieTotal = 0;
      let fatTotal = 0;
      let proteinTotal = 0;
      let carbTotal = 0;
      response.data.forEach((res) => {
        formattedFoodData[res.meal].push(res);
        calorieTotal += res.calories;
        fatTotal += res.fat;
        proteinTotal += res.protein;
        carbTotal += res.carbs;
      })
      setFoodData(formattedFoodData);
      setTotalCals(calorieTotal);
      setTotalFat(fatTotal);
      setTotalProtein(proteinTotal);
      setTotalCarbs(carbTotal);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    axios.get('/data/goals', {params: {userId: userId, startDate: today, endDate: tomorrow}})
    .then((response) => {
      if (response.data.length === 0) {
        axios.post('/data/goals', {userId: userId, startDate: today})
        .then((response) => {
          setGoalsStatus(response.data);
        })
      } else {
        setGoalsStatus(response.data[0]);
      }
    })
  }, [])

  useEffect(() => {
      getWater();
      getFood();

  }, [])

  return (
    <div className={'mainContainer'}>
      <AtAGlance water={totalWater} calories={totalCals} fat={totalFat} carbs={totalCarbs} protein={totalProtein}/>
      <Meal name={"Breakfast"} water={water['Breakfast']} food={food['Breakfast']} reRenderWater={getWater.bind(this)} reRenderFood={getFood.bind(this)}/>
      <Meal name={"Lunch"} water={water['Lunch']} food={food['Lunch']} reRenderWater={getWater.bind(this)} reRenderFood={getFood.bind(this)}/>
      <Meal name={"Dinner"} water={water['Dinner']} food={food['Dinner']} reRenderWater={getWater.bind(this)} reRenderFood={getFood.bind(this)}/>
    </div>
  )
};

export default Today;