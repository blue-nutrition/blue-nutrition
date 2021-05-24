import React, { useContext }from 'react';
import SummarySquare from './SummarySquare.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const SummaryStats = (props) => {

  return (
    <Grid container
      justify="center"
    >
      <Grid item>
        <SummarySquare metric={"water"} period={props.timePeriod}/>
      </Grid>
       <Grid item>
         <SummarySquare metric={"calories"} unit={"calories"} period={props.timePeriod}/>
       </Grid>
       <Grid item>
       <SummarySquare metric={"carbs"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
       <Grid item>
         <SummarySquare metric={"protein"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
       <Grid item>
         <SummarySquare metric={"fat"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
    </Grid>
  )
};

export default SummaryStats;