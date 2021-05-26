import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import {AppContext} from '../../../Context.jsx';

const SummarySquareCals = (props) => {
  const {userGoals} = useContext(AppContext);
  const { amt } = props;
  const calorieGoal = userGoals.calories;

  const boxStyle = {
    width: '100px',
    height: '100px',
    position: 'relative',
    overflow: 'hidden',
    margin: 'auto'
  }

  const iconStyle = {
    fontSize: '100px',
    color: "#BCD4E6",
  }
  const iconDivStyle = {
    overflow: 'hidden',
    position: 'absolute',
    top: '0',
    left: '0'
  }

  const blackIconStyle ={
    fontSize: '100px',
  }

  const blackIconDivStyle = {
    overflow: 'hidden',
    position: 'absolute',
    top: '0',
    left: '0',
    height: `${amt <= calorieGoal ? 100 - ((amt/calorieGoal)*100) : 100}%`,
    color: `${amt <= calorieGoal ? 'black' : 'red'}`
  }

  return (
    <Container>
      <Typography variant="h6" > Avg Calories</Typography>
      <div style={boxStyle}>
        <div style={iconDivStyle}>
          <RestaurantIcon style={iconStyle}/>
        </div>
        <div style={blackIconDivStyle}>
          <RestaurantIcon style={blackIconStyle} />
        </div>
      </div>
      <Typography variant="h6" >{amt} / {calorieGoal} kcal</Typography>
    </Container>
  )
};

export default SummarySquareCals;