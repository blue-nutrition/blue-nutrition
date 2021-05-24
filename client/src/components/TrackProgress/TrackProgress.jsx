import React, { useState, useContext } from 'react';
import axios from 'axios';
import AsOf from './AsOf.jsx'


const TrackProgress = (props) => {
  const today = new Date();

  const [period, setPeriod] = useState(props.period);
  const [asOf, setAsOf] = useState(today);

  // useEffect() {
  //   axios.get('/')
  // }

  //get request with previous 5 period information



  return (
    <div>
      Track Progress Widget
      <div>
        <AsOf/>
      </div>
      <div>
        Summary Stats
        </div>
    <div>
      Graphs
    </div>
    </div>
  )
};

export default TrackProgress;
