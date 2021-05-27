/* eslint-disable react/prop-types */
import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import { AppContext } from '../../../Context.jsx'

const SummarySquareWater = (props) => {
  const {userGoals} = useContext(AppContext);
  const { amt, unit } = props;
  const waterGoal = userGoals.water;


  const boxStyle = {
    width: '100px',
    height: '100px',
    position: 'relative',
    overflow: 'hidden'
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
    height: `${amt <= waterGoal ? 100 - ((amt/waterGoal)*100) : 100}%`,
    color: `${amt <= waterGoal ? 'black' : '#99C1DE'}`
  }

  return (
    <Container>
      <Typography variant="h6" >Avg Water</Typography>
      <div style={boxStyle}>
        <div style={iconDivStyle}>
          <LocalDrinkIcon style={iconStyle}/>
        </div>
        <div style={blackIconDivStyle}>
          <LocalDrinkIcon style={blackIconStyle} />
        </div>
      </div>
      <Typography variant="h6">{amt} / {waterGoal} {unit}</Typography>
    </Container>
  )
};

export default SummarySquareWater;