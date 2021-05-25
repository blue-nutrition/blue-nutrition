import React, { useContext, useState, useEffect }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Container from '@material-ui/core/Container';
import AtAGlance from './AtAGlance.jsx';
import Meal from './Meal.jsx';
const axios = require('axios');


const Today = () => {
  const { today, setToday } = useContext(AppContext);
  const { tomorrow, setTomorrow } = useContext(AppContext);
  // const { userId, setUserId } = useContext(AppContext);
  const userId = '5';
  const date = new Date();
  const [water, setWaterData] = useState({});
  const [totalWater, setTotalWater] = useState(0);
  const [food, setFoodData] = useState({'Breakfast': [], 'Lunch': [], 'Dinner': []});
  const [totalCals, setTotalCals] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalProtein, setTotalProtein] = useState(0);

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