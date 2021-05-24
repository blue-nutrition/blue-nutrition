import React, { useState, useContext } from 'react';
import axios from 'axios';


const TrackProgress = (props) => {
  const today = new Date();

  const [period, setPeriod] = useState('daily');
  const [asOf, setAsOf] = useState(today);

  useEffect() {
    axios.get('/')
  }

  //get request with previous 5 period information



  return (
    <div>
      Track Progress Widget
      {/* <AsOf/>
      <SummaryStats/>
      <Graphs/> */}
    </div>
  )
};

export default TrackProgress;