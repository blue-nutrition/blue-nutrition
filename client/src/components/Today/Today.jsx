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

  const getWater = () => {
    axios.get('/data/water', { params: {userId: userId, startDate: today, endDate: tomorrow}})
    .then((response) => {
      let formattedWaterData = { 'Breakfast': 0, 'Lunch': 0, 'Dinner': 0}
      response.data.forEach((res) => {
        formattedWaterData[res.meal] = res.oz
      })
      setWaterData(formattedWaterData);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getWater();
  }, [])

  return (
    <div className={'mainContainer'}>
      <AtAGlance/>
      <Meal name={"Breakfast"} water={water['Breakfast']} reRenderWater={getWater.bind(this)}/>
      <Meal name={"Lunch"} water={water['Lunch']} reRenderWater={getWater.bind(this)}/>
      <Meal name={"Dinner"} water={water['Dinner']} reRenderWater={getWater.bind(this)}/>
    </div>
  )
};

export default Today;