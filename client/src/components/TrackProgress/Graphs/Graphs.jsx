import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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

export default function Graphs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabPanel value={value} index={0}>
        <Calories />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Macros />
      </TabPanel>
      <TabPanel value={value} index={2}>
        < WaterIntake />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Weight />
      </TabPanel>
      <Tabs value={value} onChange={handleChange} aria-label="Graph tabs" centered>
        <Tab label="Calories" {...a11yProps(0)} />
        <Tab label="Macros" {...a11yProps(1)} />
        <Tab label="Water Intake" {...a11yProps(2)} />
        <Tab label="Weight" {...a11yProps(3)} />
      </Tabs>
    </div>
  );
}
