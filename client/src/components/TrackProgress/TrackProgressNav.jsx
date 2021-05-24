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

export default function TrackProgressNav () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="By Day" {...a11yProps(0)} />
          <Tab label="By Week" {...a11yProps(1)} />
          <Tab label="By Month" {...a11yProps(2)} />
          <Tab label="All Time" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        By Day
      </TabPanel>
      <TabPanel value={value} index={1}>
        By Week
      </TabPanel>
      <TabPanel value={value} index={2}>
        By Month
      </TabPanel>
      <TabPanel value={value} index={3}>
        All Time
      </TabPanel>
    </div>
  );
}