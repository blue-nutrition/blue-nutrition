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

const Label = symbol => (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={text + symbol}
    />
  );
};

const WeightLabel = Label(' lbs');

const WeightGraph = (props) => {
  const {
    dailyWeight, period
  } = useContext(TrackProgressContext);

  return (
    <Paper>
      <Chart
        data={dailyWeight}
      >
        <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis labelComponent={WeightLabel} />
        <BarSeries valueField="weight" argumentField="yearMonthDayUTC" color="lightslategrey" />
        {/* <LineSeries  valueField={1700} argumentField="day" /> */}
        <EventTracker />
        <Tooltip />
        <HoverState />
      </Chart>
    </Paper>
  )
}

export default WeightGraph;
