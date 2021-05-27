import React, {useContext, useState} from 'react';
import {TrackProgressContext} from '../TrackProgressContext.jsx'
import { PieChart } from 'react-minimal-pie-chart';
import Container from '@material-ui/core/Container';

const ProteinByMeal = () => {
  const { dailyBreakDown } = useContext(TrackProgressContext);



  let breakfast = 0;
  let lunch = 0;
  let dinner = 0;

  for(var i = 0; i< dailyBreakDown.length; i++) {
    if(dailyBreakDown[i]._id === 'Breakfast') {
      breakfast = dailyBreakDown[i].proteinBreakDown
    }
    if(dailyBreakDown[i]._id === 'Lunch') {
      lunch = dailyBreakDown[i].proteinBreakDown
    }
    if(dailyBreakDown[i]._id === 'Dinner') {
      dinner = dailyBreakDown[i].proteinBreakDown
    }
  }


  const pieData = [
    {title: 'Breakfast Protein:', value: breakfast, color: '#D6E2E9'},
    {title: 'Lunch Protein:', value: lunch, color: '#DBE7E4'},
    {title: 'Dinner Protein:', value: dinner, color: '#BCD4E6'}
  ]

  const defaultLabelStyle = {
    fontSize: '3',
    fontFamily: 'sans-serif',
  };

  if(!breakfast && !lunch && !dinner) {
    return ("You haven't reported any meals yet! Start eating or update your day!")
  } else {
    return (
      <Container maxWidth="xs">
        <PieChart viewBoxSize={[100,100]} radius={45} data={pieData} label={({dataEntry}) => `${dataEntry.title} ${dataEntry.value}g (${Math.floor(dataEntry.percentage)}%)`} labelStyle={{...defaultLabelStyle,}} labelPosition={60}/>
      </Container>
    )
  }
};

export default ProteinByMeal;
