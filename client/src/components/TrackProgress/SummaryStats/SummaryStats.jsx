import React, { useContext }from 'react';
import SummarySquare from './SummarySquare.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns'

const SummaryStats = (props) => {
  const {timePeriod, asOf} = props;

  // const asOfDay = format(asOf, 'MMM do YYYY');

  // console.log(asOfDay)








  return (
    <Grid container
      justify="center"
    >
      <Grid item xs={2}>
        <SummarySquare date={'water'} period={props.timePeriod}/>
      </Grid>
       <Grid item xs={2}>
         <SummarySquare date={"calories"} unit={"calories"} period={props.timePeriod}/>
       </Grid>
       <Grid item xs={2}>
       <SummarySquare date={"carbs"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare date={"protein"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
       <Grid item xs={2}>
         <SummarySquare date={"fat"} unit={"grams"} period={props.timePeriod}/>
       </Grid>
    </Grid>
  )
};

export default SummaryStats;