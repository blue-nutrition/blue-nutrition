import React, { useContext, useState, useEffect }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import AtAGlanceSquareWater from './AtAGlanceSquareWater.jsx';
import AtAGlanceSquareCals from './AtAGlanceSquareCals.jsx';
import AtAGlanceSquareFat from './AtAGlanceSquareFat.jsx';
import AtAGlanceSquareCarbs from './AtAGlanceSquareCarbs.jsx';
import AtAGlanceSquareProtein from './AtAGlanceSquareProtein.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AtAGlance = (props) => {
  const { today, userGoals } = useContext(AppContext);
  return (
    <Grid container
      justify="center"
    >
      <Grid item xs={12}>
        <Typography variant="h3">Day At A Glance</Typography>
        <Typography variant="h6">{new Intl.DateTimeFormat('en-US').format(today)}</Typography>
      </Grid>
      <Grid item>
        <AtAGlanceSquareWater metric={"water"} unit={"oz"} amt={props.water} goal={userGoals.water}/>
      </Grid>
       <Grid item>
         <AtAGlanceSquareCals metric={"calories"} unit={"calories"} amt={props.calories} goal={userGoals.calories}/>
       </Grid>
       <Grid item>
       <AtAGlanceSquareCarbs metric={"carbs"} unit={"grams"} amt={props.carbs} goal={userGoals.carbs}/>
       </Grid>
       <Grid item>
         <AtAGlanceSquareProtein metric={"protein"} unit={"grams"} amt={props.protein} goal={userGoals.protein}/>
       </Grid>
       <Grid item>
         <AtAGlanceSquareFat metric={"fat"} unit={"grams"} amt={props.fat} goal={userGoals.fats}/>
       </Grid>
    </Grid>
  )
};

export default AtAGlance;