import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TrackProgress from './TrackProgress.jsx'


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
      <Grid item xs={12}>
    <Typography variant="h3">Your Progress</Typography>
  </Grid>
      <AppBar center position="static" color='secondary'>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="By Day" {...a11yProps(0)} />
          <Tab label="By Week" {...a11yProps(1)} />
          <Tab label="By Month" {...a11yProps(2)} />
          <Tab label="All Time" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TrackProgress period={'daily'}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TrackProgress period={'weekly'}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TrackProgress period={'monthly'}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <TrackProgress period={'allTime'}/>
      </TabPanel>
    </div>
  );
}