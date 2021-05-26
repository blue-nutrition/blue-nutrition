import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries, LineSeries, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Stack, EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';

const data = [
  { day: 'Monday', water: 150 },
  { day: 'Tuesday', water: 120 },
  { day: 'Wednesday', water: 70 },
  { day: 'Thursday', water: 95 },
  { day: 'Friday', water: 80 },
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

const WaterIntakeLabel = Label(' oz');

const WaterIntakeGraph = (props) => {
  return (
    <Paper>
      <Chart
        data={data}
      >
        <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis labelComponent={WaterIntakeLabel} />
        <BarSeries valueField="water" argumentField="day" />
        <LineSeries  valueField={1700} argumentField="day" />
        <EventTracker />
        <Tooltip />
        <HoverState />
      </Chart>
    </Paper>
  )
}

export default WaterIntakeGraph;
