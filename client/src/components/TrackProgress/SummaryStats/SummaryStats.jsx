import React, { useContext }from 'react';
import SummarySquare from './SummarySquare.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const SummaryStats = (props) => {
  const {timePeriod, asOf} = props;




  return (
    <Grid container
      justify="center"
    >
      <Grid item xs={2}>
        <SummarySquare date={"water"} period={props.timePeriod}/>
      </Grid>
       <Grid item xs={2}>
         <SummarySquare dateRange={"calories"} unit={"calories"} period={props.timePeriod}/>
       </Grid>
       <Grid item xs={2}>
       <SummarySquare dateRange={"carbs"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare dateRange={"protein"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare dateRange={"fat"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
    </Grid>
  )
};

export default SummaryStats;