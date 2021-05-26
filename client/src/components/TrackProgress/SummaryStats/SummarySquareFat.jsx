import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CakeIcon from '@material-ui/icons/Cake';
import {AppContext} from '../../../Context.jsx';

const SummarySquareFat = (props) => {
  const {userGoals} = useContext(AppContext);
  const { amt, unit } = props;
  const fatGoal = userGoals.fats;

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
    height: `${amt <= fatGoal ? 100 - ((amt/fatGoal)*100) : 100}%`,
    color: `${amt <= fatGoal ? 'black' : '#99C1DE'}`
  }

  return (
    <Container>
      <Typography variant="h6" >Fat</Typography>
      <div style={boxStyle}>
        <div style={iconDivStyle}>
          <CakeIcon style={iconStyle}/>
        </div>
        <div style={blackIconDivStyle}>
          <CakeIcon style={blackIconStyle} />
        </div>
      </div>
      <Typography variant="h6" >{amt} / {fatGoal} grams</Typography>
    </Container>
  )
};

export default SummarySquareFat;