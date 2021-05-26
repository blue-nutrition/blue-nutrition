import React, { useContext }from 'react';
import SummarySquare from './SummarySquare.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';
import SummarySquareCals from './SummarySquareCals.jsx'

const SummaryStats = (props) => {
  const {timePeriod, asOf, dailyWater, dailyFood} = props;

  const totalDays = dailyFood.length;

  const avgCalc = (param) => {
    var sum = 0;
    dailyFood.forEach((day) => {
      sum = sum + day[param]
    })
    var avg = Math.round(sum/totalDays);
    return avg;
  }


  return (
    <Grid container
      justify="center"
    >
      <Grid item xs={2}>
        <SummarySquare title={'Water'} unit={"oz"} period={props.timePeriod} image={'water_PNG50246.png'} amt={dailyWater.dailyWater}/>
      </Grid>
       <Grid item xs={2}>
         <SummarySquareCals title={"Calorie"} period={props.timePeriod} unit={"kcal"} image={'calories.png'} amt={avgCalc('dailyCalories')}/>
       </Grid>
       <Grid item xs={2}>
       <SummarySquare title={"Carb"} period={props.timePeriod} unit={"g"} image={'carb.png'} amt={avgCalc('dailyCarbs')}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Protein"} period={props.timePeriod} unit={"g"} image={'protein.png'} amt={avgCalc('dailyProtein')}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Fat"} period={props.timePeriod} unit={"g"} image={'fat.png'} amt={avgCalc('dailyFat')}/>
       </Grid>
    </Grid>
  )
};

export default SummaryStats;