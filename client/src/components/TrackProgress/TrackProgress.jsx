import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../Context.jsx'
import axios from 'axios';
import Graphs from './Graphs/Graphs.jsx';
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
  const [dailyWeight, setDailyWeight] = useState();

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
  },[period, asOf]);


  return (
    <Container>
      <div>
        <AsOf setAsOf={setAsOf} asOf={asOf} period={period}  handleChange={handleChange} setStartDate={setStartDate} setEndDate={setEndDate}/>
      </div>
      <div>
<<<<<<< HEAD
        <SummaryStats timePeriod={period} asOf={asOf} food={food} water={water}/>
      </div>
      <div>
        <Graphs />
      </div>
=======
        <SummaryStats timePeriod={period} asOf={asOf} dailyFood={dailyFood} dailyWater={dailyWater}/>
        </div>
    <div>
      Graphs
    </div>
>>>>>>> main
    </Container>
  )
};

export default TrackProgress;
