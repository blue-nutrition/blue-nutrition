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
  const [dailyFood, setDailyFood] = useState([{ "_id": "2021-05-20",
  "dailyCalories": 2300,
  "dailyProtein": 36,
  "dailyCarbs": 104,
  "dailyFat": 104 }]);
  const [dailyWater, setDailyWater] = useState(100);
  const [dailyWeight, setDailyWeight] = useState(150);






  useEffect(() => {
    console.log(
      'this is startDate', startDate, 'this is End Date', endDate, 'this is period', period
    )
    axios.get('/data/dailyfood', {
      params: {
        'userId': userId,
        'startDate': startDate,
        'endDate': endDate
      }
    })
    .then((resp) => {
      setDailyFood(resp.data);
      axios.get('/data/dailyWater', {
        params: {
          'userId': userId,
          'startDate': startDate,
          'endDate': endDate
        }
      })
        .then((response) => {
          setDailyWater(response.data);
          axios.get('/data/dailyWeight', {
            params: {
              'userId': userId,
              'startDate': startDate,
              'endDate': endDate
            }
          })
          .then((res) => {
            setDailyWeight(res.data);
          })
        })
    })
    .catch((err) => {
      console.log('this is what happens when you eat too much cake: ', err)
    })
  },[period, startDate, endDate]);


  return (
    <Container>
      <div>
        <AsOf setAsOf={setAsOf} asOf={asOf} period={period}  handleChange={handleChange} setStartDate={setStartDate} setEndDate={setEndDate} endDate={endDate}/>
      </div>
      <div>
        <SummaryStats timePeriod={period} asOf={asOf} dailyFood={dailyFood} dailyWater={dailyWater}/>
        </div>
    <div>
      Graphs
    </div>
    </Container>
  )
};

export default TrackProgress;
