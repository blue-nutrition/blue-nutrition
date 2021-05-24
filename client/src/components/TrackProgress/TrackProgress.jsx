import React, { useState, useContext } from 'react';
import axios from 'axios';
import AsOf from './AsOf.jsx';
import Container from '@material-ui/core/Container';
import SummaryStats from './SummaryStats/SummaryStats.jsx'


const TrackProgress = (props) => {
  const today = new Date();

  const [period, setPeriod] = useState(props.period);
  const [asOf, setAsOf] = useState(today);

  // useEffect() {
  //   axios.get('/')
  // }

  //get request with previous 5 period information



  return (
    <Container>
      <div>
        <AsOf setAsOf={setAsOf} asOf={asOf}/>
      </div>
      <div>
        <SummaryStats timePeriod={period}/>
        </div>
    <div>
      Graphs
    </div>
    </Container>
  )
};

export default TrackProgress;
