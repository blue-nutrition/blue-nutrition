import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries, LineSeries, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Stack, EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';

const data = [
  { day: 'Monday', weight: 150 },
  { day: 'Tuesday', weight: 153 },
  { day: 'Wednesday', weight: 151 },
  { day: 'Thursday', weight: 151 },
  { day: 'Friday', weight: 152 },
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

const WeightLabel = Label(' lbs');

const WeightGraph = (props) => {
  return (
    <Paper>
      <Chart
        data={data}
      >
        <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis labelComponent={WeightLabel} />
        <BarSeries valueField="weight" argumentField="day" />
        <LineSeries  valueField={1700} argumentField="day" />
        <EventTracker />
        <Tooltip />
        <HoverState />
      </Chart>
    </Paper>
  )
}

export default WeightGraph;
