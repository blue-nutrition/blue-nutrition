import React, { useContext }from 'react';
import SummarySquare from './SummarySquare.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns'

const SummaryStats = (props) => {
  const {timePeriod, asOf, water, food} = props;

  const asOfDate = new Date(asOf);
  console.log(asOfDate);
  // const asOfDay = format(asOfDate, '')


  // console.log(asOfDay)


  return (
    <Grid container
      justify="center"
    >
      <Grid item xs={2}>
        <SummarySquare title={'Water'} unit={"oz"} period={props.timePeriod} image={'water_PNG50246.png'} amount={water}/>
      </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Calorie"} period={props.timePeriod} unit={"kcal"} image={'calories.png'} amount={food.calories}/>
       </Grid>
       <Grid item xs={2}>
       <SummarySquare title={"Carb"} period={props.timePeriod} unit={"g"} image={'carb.png'} amount={food.carbs}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Protein"} period={props.timePeriod} unit={"g"} image={'protein.png'} amount={food.protein}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare title={"Fat"} period={props.timePeriod} unit={"g"} image={'fat.png'} amount={food.fat}/>
       </Grid>
    </Grid>
  )
};

export default SummaryStats;