import React, { useState } from 'react';


const TrackProgress = (props) => {
  const today = new Date();
  const todayDate = today.toISOstring();

  const [period, setPeriod] = useState('daily');
  const [asOf, setAsOf] = useState(todayDate);


  return (
    <div>
      Track Progress Widget
      <AsOf/>
      <SummaryStats/>
      <Graphs/>
    </div>
  )
};

export default TrackProgress;