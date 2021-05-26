import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { ArgumentAxis, ValueAxis, Chart, BarSeries, Tooltip, Legend } from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale, Stack, EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';

const data = [
  { day: 'Monday', protein: 150, carbs: 100, fat: 50 },
  { day: 'Tuesday', protein: 75, carbs: 150, fat: 80 },
  { day: 'Wednesday', protein: 125, carbs: 200, fat: 90 },
  { day: 'Thursday', protein: 92, carbs: 175, fat: 75 },
  { day: 'Friday', protein: 80, carbs: 250, fat: 92 },
]

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
  const [targetItem, setTargetItem] = useState();
  const handleTargetItemChange = targetItem => {setTargetItem(targetItem)};

  return (
    <Paper>
      <Chart
        data={data}
      >
        <ArgumentScale factory={scaleBand} />
        <ArgumentAxis />
        <ValueAxis labelComponent={MacroLabel}/>

        <BarSeries
          valueField="protein"
          argumentField="day"
          name="Protein"
        />
        <BarSeries
          valueField="carbs"
          argumentField="day"
          name="Carbs"
        />
        <BarSeries
          valueField="fat"
          argumentField="day"
          name="Fat"
        />
        <Stack
          stacks={[
            { series: ['Protein', 'Carbs', 'Fat'] },
          ]}
        />
        <EventTracker />
        <Tooltip targetItem={targetItem} onTargetItemChange={handleTargetItemChange} />
        <HoverState />
        <Legend />
      </Chart>
    </Paper>
  );
}

export default MacrosGraph;