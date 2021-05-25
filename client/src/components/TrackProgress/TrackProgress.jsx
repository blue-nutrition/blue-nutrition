import React, { useState, useContext } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import Graphs from './Graphs/Graphs.jsx';
=======
import AsOf from './AsOf.jsx';
import Container from '@material-ui/core/Container';
import SummaryStats from './SummaryStats/SummaryStats.jsx'
>>>>>>> main


const TrackProgress = (props) => {
  const today = new Date();

  const [period, setPeriod] = useState(props.period);
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

  // useEffect() {
  //   axios.get('/food')
  // }

  //get request with previous 5 period information



  return (
    <Container>
      <div>
        <AsOf setAsOf={setAsOf} asOf={asOf} period={period}/>
      </div>
      <div>
        <SummaryStats timePeriod={period} asOf={asOf} food={food} water={water}/>
        </div>
<<<<<<< HEAD
      <div>
        <Graphs />
      </div>
    </div>
=======
    <div>
      Graphs
    </div>
    </Container>
>>>>>>> main
  )
};

export default TrackProgress;
