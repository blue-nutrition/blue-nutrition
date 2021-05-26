import React, {useContext, useState} from 'react';
import {TrackProgressContext} from '../TrackProgressContext.jsx'
import { PieChart } from 'react-minimal-pie-chart';

const CarbsByMeal = () => {
  const { dailyBreakDown } = useContext(TrackProgressContext);



  let breakfast = 0;
  let lunch = 0;
  let dinner = 0;

  for(var i = 0; i< dailyBreakDown.length; i++) {
    if(dailyBreakDown[i]._id === 'Breakfast') {
      breakfast = dailyBreakDown[i].carbBreakDown
    }
    if(dailyBreakDown[i]._id === 'Lunch') {
      lunch = dailyBreakDown[i].carbBreakDown
    }
    if(dailyBreakDown[i]._id === 'Dinner') {
      dinner = dailyBreakDown[i].carbBreakDown
    }
  }


  const pieData = [
    {title: 'Breakfast Carbs:', value: breakfast, color: '#D6E2E9'},
    {title: 'Lunch Carbs:', value: lunch, color: '#DBE7E4'},
    {title: 'Dinner Carbs:', value: dinner, color: '#BCD4E6'}
  ]

  const defaultLabelStyle = {
    fontSize: '2',
    fontFamily: 'sans-serif',
  };

  if(!breakfast && !lunch && !dinner) {
    return ('')
  } else {
    return (
      <div>
        <PieChart viewBoxSize={[80,80]} center={[40,40]} radius={25} data={pieData} label={({dataEntry}) => `${dataEntry.title} ${dataEntry.value}g (${Math.floor(dataEntry.percentage)}%)`} labelStyle={{...defaultLabelStyle,}} labelPosition={70}/>
      </div>
    )
  }

};

export default CarbsByMeal;
