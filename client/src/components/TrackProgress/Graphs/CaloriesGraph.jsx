import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries, LineSeries, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Stack, EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';

const data = [
  { day: 'Monday', calories: 1500, goal: 1600 },
  { day: 'Tuesday', calories: 2000, goal: 1600 },
  { day: 'Wednesday', calories: 1700, goal: 1600 },
  { day: 'Thursday', calories: 2200, goal: 1600 },
  { day: 'Friday', calories: 1800, goal: 1600 },
];

const Label = symbol => (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={text + symbol}
    />
  );
};

const CalorieLabel = Label(' cal');

const CaloriesGraph = (props) => {
  return (
    <Paper>
      <Chart
        data={data}
      >
        <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis labelComponent={CalorieLabel} />
        <BarSeries valueField="calories" argumentField="day" color="lightslategrey" />
        <LineSeries  valueField="goal" argumentField="day" color="bisque" />
        <EventTracker />
        <Tooltip />
        <HoverState />
      </Chart>
    </Paper>
  )
}

export default CaloriesGraph;
