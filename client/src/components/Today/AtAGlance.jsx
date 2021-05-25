import React, { useContext }from 'react';
import AtAGlanceSquareWater from './AtAGlanceSquareWater.jsx';
import AtAGlanceSquareCals from './AtAGlanceSquareCals.jsx';
import AtAGlanceSquareFat from './AtAGlanceSquareFat.jsx';
import AtAGlanceSquareCarbs from './AtAGlanceSquareCarbs.jsx';
import AtAGlanceSquareProtein from './AtAGlanceSquareProtein.jsx';
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
        <AtAGlanceSquareWater metric={"water"} unit={"oz"} amt={props.water} goal={74}/>
      </Grid>
       <Grid item>
         <AtAGlanceSquareCals metric={"calories"} unit={"calories"} amt={props.calories} goal={2000}/>
       </Grid>
       <Grid item>
       <AtAGlanceSquareCarbs metric={"carbs"} unit={"grams"} amt={props.carbs} goal={50}/>
       </Grid>
       <Grid item>
         <AtAGlanceSquareProtein metric={"protein"} unit={"grams"} amt={props.protein} goal={50}/>
       </Grid>
       <Grid item>
         <AtAGlanceSquareFat metric={"fat"} unit={"grams"} amt={props.fat} goal={50}/>
       </Grid>
    </Grid>
  )
};

export default AtAGlance;