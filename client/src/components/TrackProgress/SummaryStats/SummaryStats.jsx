import React, { useContext }from 'react';
import SummarySquare from './SummarySquare.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns'

const SummaryStats = (props) => {
  const {timePeriod, asOf, dailyWater, dailyFood} = props;

  const totalDays = dailyFood.length;

  const avgCalc = (param) => {
    var sum = 0;
    dailyFood.forEach((day) => {
      sum = sum + day[param]
    })
    var avg = sum/totalDays;
    return avg;
  }


  return (
    <Grid container
      justify="center"
    >
      <Grid item xs={2}>
        <SummarySquare title={'Water'} unit={"oz"} period={props.timePeriod} image={'water_PNG50246.png'} amount={dailyWater.dailyWater}/>
      </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Calorie"} period={props.timePeriod} unit={"kcal"} image={'calories.png'} amount={avgCalc('dailyCalories')}/>
       </Grid>
       <Grid item xs={2}>
       <SummarySquare title={"Carb"} period={props.timePeriod} unit={"g"} image={'carb.png'} amount={avgCalc('dailyCarbs')}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Protein"} period={props.timePeriod} unit={"g"} image={'protein.png'} amount={avgCalc('dailyProtein')}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Fat"} period={props.timePeriod} unit={"g"} image={'fat.png'} amount={avgCalc('dailyFat')}/>
       </Grid>
    </Grid>
  )
};

export default SummaryStats;