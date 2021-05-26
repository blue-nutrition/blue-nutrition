import React, { useContext }from 'react';
import SummarySquare from './SummarySquare.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';
import SummarySquareCals from './SummarySquareCals.jsx';
import SummarySquareWater from './SummarySquareWater.jsx'

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
        <SummarySquareWater title={'Water'} unit={"oz"} period={props.timePeriod} amt={dailyWater.dailyWater}/>
      </Grid>
       <Grid item xs={2}>
         <SummarySquareCals title={"Calorie"} period={props.timePeriod} unit={"kcal"} amt={avgCalc('dailyCalories')}/>
       </Grid>
       <Grid item xs={2}>
       <SummarySquare title={"Carb"} period={props.timePeriod} unit={"g"} amt={avgCalc('dailyCarbs')}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Protein"} period={props.timePeriod} unit={"g"} amt={avgCalc('dailyProtein')}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Fat"} period={props.timePeriod} unit={"g"} image={'fat.png'} amt={avgCalc('dailyFat')}/>
       </Grid>
    </Grid>
  )
};

export default SummaryStats;