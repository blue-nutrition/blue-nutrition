import React, { useContext }from 'react';
import SummarySquare from './SummarySquare.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';
import SummarySquareCals from './SummarySquareCals.jsx';
import SummarySquareWater from './SummarySquareWater.jsx';
import SummarySquareCarbs from './SummarySquareCarbs.jsx';
import SummarySquareProtein from './SummarySquareProtein.jsx';
import SummarySquareFat from './SummarySquareFat.jsx'

const SummaryStats = (props) => {
  const {timePeriod, asOf, dailyWater, dailyFood} = props;

  console.log('this is daily Water', dailyWater)

  const totalDays = dailyFood.length;
  const totalWaterDays = dailyWater.length;

  const avgCalc = (param) => {
    var sum = 0;
    dailyFood.forEach((day) => {
      sum = sum + day[param]
    })
    var avg = Math.round(sum/totalDays);
    if(!avg) {
      return 0
    } else {
      return avg;
    }
  }

  const avgWater = (param) => {
    var sum = 0;
    dailyWater.forEach((day) => {
      sum = sum + day[param]
    })
    var avg = Math.round(sum/totalWaterDays);
    return avg;
  }


  return (
    <Grid container
      justify="center"
    >
      <Grid item xs={2}>
        <SummarySquareWater title={'Water'} unit={"oz"} period={props.timePeriod} amt={avgWater('dailyWater')}/>
      </Grid>
       <Grid item xs={2}>
         <SummarySquareCals title={"Calorie"} period={props.timePeriod} unit={"kcal"} amt={avgCalc('dailyCalories')}/>
       </Grid>
       <Grid item xs={2}>
       <SummarySquareCarbs title={"Carb"} period={props.timePeriod} unit={"g"} amt={avgCalc('dailyCarbs')}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquareProtein title={"Protein"} period={props.timePeriod} unit={"g"} amt={avgCalc('dailyProtein')}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquareFat title={"Fat"} period={props.timePeriod} unit={"g"} image={'fat.png'} amt={avgCalc('dailyFat')}/>
       </Grid>
    </Grid>
  )
};

export default SummaryStats;