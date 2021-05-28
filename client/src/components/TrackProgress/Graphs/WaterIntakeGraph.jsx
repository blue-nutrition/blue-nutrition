/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries, LineSeries, Tooltip, Legend } from '@devexpress/dx-react-chart-material-ui';
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

const WaterIntakeLabel = Label(' oz');

const WaterIntakeGraph = (props) => {
  const {
    dailyWater, period
  } = useContext(TrackProgressContext);
  const { userGoals }= useContext(AppContext);

  const waterData = dailyWater.map((document) => {
    return {...document, waterGoal: userGoals.water  };
  })

  return (
    <Paper>
      <Chart
        data={waterData}
      >
        <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis labelComponent={WaterIntakeLabel} />
        <BarSeries valueField="dailyWater" argumentField="_id" name="Water" />
        <LineSeries  valueField="waterGoal" argumentField="_id" name="Goal" color="bisque" />
        <EventTracker />
        <Tooltip />
        <HoverState />
        <Legend />
      </Chart>
    </Paper>
  )
}

export default WaterIntakeGraph;
