import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Graphs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab label="Calories" {...a11yProps(0)} />
        <Tab label="Macros" {...a11yProps(1)} />
        <Tab label="Water Intake" {...a11yProps(2)} />
        <Tab label="Weight" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Calories
      </TabPanel>
      <TabPanel value={value} index={1}>
        Macros
      </TabPanel>
      <TabPanel value={value} index={2}>
        Water Intake
      </TabPanel>
      <TabPanel value={value} index={3}>
        Weight
      </TabPanel>
    </div>
  );
}
