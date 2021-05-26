/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries, LineSeries, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Stack, EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';
import { TrackProgressContext } from '../TrackProgressContext.jsx';
import { AppContext } from '../../../Context.jsx';

const Label = symbol => (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={text + symbol}
    />
  );
};

const CalorieLabel = Label(' kcal');

const CaloriesGraph = (props) => {
  const {
    dailyFood, period
  } = useContext(TrackProgressContext);
  const { userGoals } = useContext(AppContext);

  if (dailyFood && userGoals) {
    return (
      <Paper>
        <Chart
          data={dailyFood}
        >
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis labelComponent={CalorieLabel} />
          <BarSeries valueField="dailyCalories" argumentField="_id" color="lightslategrey" />
          <LineSeries  valueField="calories" argumentField="_id" color="bisque" />
          <EventTracker />
          <Tooltip />
          <HoverState />
        </Chart>
      </Paper>
    )
  }
  return (
    <h1>Loading....</h1>
  )
}

export default CaloriesGraph;
