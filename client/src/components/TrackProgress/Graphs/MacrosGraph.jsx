import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries, Tooltip, Legend } from '@devexpress/dx-react-chart-material-ui';
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

const MacroLabel = Label(' grams');

const MacrosGraph = (props) => {
  const {
    dailyFood, period
  } = useContext(TrackProgressContext);

  return (
    <Paper>
      <Chart
        data={dailyFood}
      >
        <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis labelComponent={MacroLabel}/>

        <BarSeries
          valueField="dailyProtein"
          argumentField="_id"
          name="Protein"
        />
        <BarSeries
          valueField="dailyCarbs"
          argumentField="_id"
          name="Carbs"
        />
        <BarSeries
          valueField="dailyFat"
          argumentField="_id"
          name="Fat"
        />
        <Stack
          stacks={[
            { series: ['Protein', 'Carbs', 'Fat'] },
          ]}
        />
        <EventTracker />
        <Tooltip />
        <HoverState />
        <Legend />
      </Chart>
    </Paper>
  );
}

export default MacrosGraph;