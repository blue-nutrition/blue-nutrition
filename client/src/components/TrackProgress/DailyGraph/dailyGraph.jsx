import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Calories from './CaloriesGraph.jsx';
import Macros from './MacrosGraph.jsx';
import WaterIntake from './WaterIntakeGraph.jsx';
import Weight from './WeightGraph.jsx';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DailyGraphs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabPanel value={value} index={0}>
        <CaloriesByMeal />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CarbsByMeal />
      </TabPanel>
      <TabPanel value={value} index={2}>
        < ProteinByMeal />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FatByMeal />
      </TabPanel>
      <Tabs value={value} onChange={handleChange} aria-label="Graph tabs" centered>
        <Tab label="Calories" {...a11yProps(0)} />
        <Tab label="Carbs" {...a11yProps(1)} />
        <Tab label="Protein" {...a11yProps(2)} />
        <Tab label="Fat" {...a11yProps(3)} />
      </Tabs>
    </div>
  );
}