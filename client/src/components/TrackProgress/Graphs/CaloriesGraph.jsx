import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';

const data = [
  { day: 'Monday', calories: 1500 },
  { day: 'Tuesday', calories: 2000 },
  { day: 'Wednesday', calories: 1700 },
  { day: 'Thursday', calories: 2200 },
  { day: 'Friday', calories: 1800 },
];

export default () => (
  <Paper>
    <Chart
      data={data}
    >
      <ArgumentScale factory={scaleBand} />
      <ArgumentAxis />
      <ValueAxis  />
      <BarSeries valueField="calories" argumentField="day" />
    </Chart>
  </Paper>
);
