import React, {useContext, useState} from 'react';
import {TrackProgressContext} from '../TrackProgressContext.jsx'
import { PieChart } from 'react-minimal-pie-chart';

const CaloriesByMeal = () => {
  const { dailyBreakDown } = useContext(TrackProgressContext);

  let breakfast = 0;
  let lunch = 0;
  let dinner = 0;

  for(var i = 0; i< dailyBreakDown.length; i++) {
    if(dailyBreakDown[i]._id === 'Breakfast') {
      breakfast = dailyBreakDown[i].calorieBreakDown
    }
    if(dailyBreakDown[i]._id === 'Lunch') {
      lunch = dailyBreakDown[i].calorieBreakDown
    }
    if(dailyBreakDown[i]._id === 'Dinner') {
      dinner = dailyBreakDown[i].calorieBreakDown
    }
  }


  const pieData = [
    {title: 'Breakfast Calories', value: breakfast, color: '#D6E2E9'},
    {title: 'Lunch Calories', value: lunch, color: '#DBE7E4'},
    {title: 'Dinner Calories', value: dinner, color: '#F0EFEB'}
  ]

  const defaultLabelStyle = {
    fontSize: '1',
    fontFamily: 'sans-serif',
  };

  if(!breakfast && !lunch && !dinner) {
    return ("You haven't reported any food intake! Update your day or start eating to view this feature!")
  } else {
    return (
      <div>
        <PieChart radius={10} data={pieData} label={({dataEntry}) => `${dataEntry.title} ${dataEntry.value}`} labelStyle={{...defaultLabelStyle,}} labelPosition={70}/>
      </div>
    )
  }

};

export default CaloriesByMeal;


