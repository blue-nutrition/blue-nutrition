import React, { useContext }from 'react';
import AtAGlanceSquare from './AtAGlanceSquare.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AtAGlance = (props) => {

  return (
    <Grid container
      justify="center"
    >
      <Grid item xs={12}>
        <Typography variant="h3">Your Day At A Glance</Typography>
      </Grid>
      <Grid item>
        <AtAGlanceSquare metric={"water"} unit={"oz"} amt={props.water}/>
      </Grid>
       <Grid item>
         <AtAGlanceSquare metric={"calories"} unit={"calories"}/>
       </Grid>
       <Grid item>
       <AtAGlanceSquare metric={"carbs"} unit={"grams"}/>
       </Grid>
       <Grid item>
         <AtAGlanceSquare metric={"protein"} unit={"grams"}/>
       </Grid>
       <Grid item>
         <AtAGlanceSquare metric={"fat"} unit={"grams"}/>
       </Grid>
    </Grid>
  )
};

export default AtAGlance;