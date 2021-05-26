/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TrackProgress from './TrackProgress.jsx';
import {AppContext} from '../../Context.jsx'
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')


function TabPanel(props) {
  const { children, value, index, handleChange } = props;

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

export default function TrackProgressNav (props) {
  const [value, setValue] = React.useState(0);
  const { userId, tomorrow, today } = useContext(AppContext)

  const[startDate, setStartDate] = useState(today);
  const[endDate, setEndDate] = useState(tomorrow);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('this is newValue', newValue)
    const day = new Date(endDate).setHours(0,0,0,0);
    const startDate = zonedTimeToUtc(day, 'America/Denver');
    if(newValue === 0) {
      startDate.setDate(startDate.getDate() - 1);
      setStartDate(startDate.toISOString())
    } else if (newValue === 1) {
      startDate.setDate(startDate.getDate() - 6);
      setStartDate(startDate.toISOString());
    } else if (newValue === 2) {
      startDate.setDate(startDate.getDate() - 29);
      setStartDate(startDate.toISOString());
    } else {
      const allTime = new Date('01/01/2021')
      setStartDate(allTime.toISOString());
    }
  };




  return (
    <div>
      <Grid item xs={12}>
    <Typography variant="h3">Your Progress</Typography>
  </Grid>
      <AppBar position="static" color='secondary'>
        <Tabs centered value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Day" {...a11yProps(0)} />
          <Tab label="Last 7 Days" {...a11yProps(1)} />
          <Tab label="Last 30 Days" {...a11yProps(2)} />
          <Tab label="All Time" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TrackProgress period={'Daily'} handleChange={props.handleChange} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TrackProgress period={'Weekly'} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TrackProgress period={'Monthly'} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <TrackProgress period={'All Time'} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
      </TabPanel>
    </div>
  );
}