/* eslint-disable react/prop-types */
import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import EcoIcon from '@material-ui/icons/Eco';
import {AppContext} from '../../../Context.jsx';

const SummarySquareCarbs = (props) => {
  const {userGoals} = useContext(AppContext);
  const { amt } = props;
  const carbGoal = userGoals.carbs;

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
    height: `${amt <= carbGoal ? 100 - ((amt/carbGoal)*100) : 100}%`,
    color: `${amt <= carbGoal ? 'black' : '#99C1DE'}`
  }

  return (
    <Container>
      <Typography variant="h6" >Avg Carbs</Typography>
      <div style={boxStyle}>
        <div style={iconDivStyle}>
          <EcoIcon style={iconStyle}/>
        </div>
        <div style={blackIconDivStyle}>
          <EcoIcon style={blackIconStyle} />
        </div>
      </div>
      <Typography variant="h6" >{amt} / {carbGoal} grams</Typography>
    </Container>
  )
};

export default SummarySquareCarbs;