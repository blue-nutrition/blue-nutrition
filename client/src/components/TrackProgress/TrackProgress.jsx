import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../Context.jsx'
import axios from 'axios';
import AsOf from './AsOf.jsx';
import Container from '@material-ui/core/Container';
import SummaryStats from './SummaryStats/SummaryStats.jsx'


const TrackProgress = (props) => {
  const { handleChange, period, startDate, endDate, setStartDate, setEndDate } = props;
  const { userId, tomorrow, today } = useContext(AppContext)

  const [asOf, setAsOf] = useState(today);
  const [food, setFood] = useState(
    {
  userId: 5,
  calories: 1500,
  protein: 100,
  carbs: 200,
  fat: 70,
  meal: 'breakfast',
  foodName: 'huevos rancheros',
  date: "2021-05-25T01:16:17.280Z"
    }
  );
  const [water, setWater] = useState(100);

  console.log('this is start date', startDate, 'this is end date', endDate, 'this is period', period)

  useEffect(() => {
    axios.get('/data/dailyfood', {
      params: {
        'userId': userId,
        'startDate': startDate,
        'endDate': endDate
      }
    })
    .then((resp) => {
      console.log('this is the response data', resp)
    })
  },[period, startDate, endDate]);


  return (
    <Container>
      <div>
        <AsOf setAsOf={setAsOf} asOf={asOf} period={period}  handleChange={handleChange} setStartDate={setStartDate} setEndDate={setEndDate}/>
      </div>
      <div>
        <SummaryStats timePeriod={period} asOf={asOf} food={food} water={water}/>
        </div>
    <div>
      Graphs
    </div>
    </Container>
  )
};

export default TrackProgress;
