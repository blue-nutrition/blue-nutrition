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
      <Grid item>
        <SummarySquare dateRange={"water"} period={props.timePeriod}/>
      </Grid>
       <Grid item>
         <SummarySquare dateRange={"calories"} unit={"calories"} period={props.timePeriod}/>
       </Grid>
       <Grid item>
       <SummarySquare dateRange={"carbs"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
       <Grid item>
         <SummarySquare dateRange={"protein"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
       <Grid item>
         <SummarySquare dateRange={"fat"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
    </Grid>
  )
};

export default SummaryStats;