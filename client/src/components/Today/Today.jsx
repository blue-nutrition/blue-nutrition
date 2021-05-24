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
  const [water, setWaterData] = useState(null);

  console.log(today);
  console.log(tomorrow);

  useEffect(() => {
    axios.get('/data/water', { params: {userId: userId, startDate: today, endDate: tomorrow}})
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  })

  return (
    <div className={'mainContainer'}>
      <AtAGlance/>
      <Meal name={"Breakfast"}/>
      <Meal name={"Lunch"}/>
      <Meal name={"Dinner"}/>
    </div>
  )
};

export default Today;