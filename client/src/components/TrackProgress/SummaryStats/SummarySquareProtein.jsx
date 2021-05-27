/* eslint-disable react/prop-types */
import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import {AppContext} from '../../../Context.jsx';

const SummarySquareProtein = (props) => {
  const {userGoals} = useContext(AppContext);
  const { amt } = props;
  const proteinGoal = userGoals.protein;


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
    height: `${amt <= proteinGoal ? 100 - ((amt/proteinGoal)*100) : 100}%`,
    color: `${amt <= proteinGoal ? 'black' : '#99C1DE'}`
  }

  return (
    <Container>
      <Typography variant="h6" >Avg Protein</Typography>
      <div style={boxStyle}>
        <div style={iconDivStyle}>
          <OutdoorGrillIcon style={iconStyle}/>
        </div>
        <div style={blackIconDivStyle}>
          <OutdoorGrillIcon style={blackIconStyle} />
        </div>
      </div>
      <Typography variant="h6" >{amt} / {proteinGoal} grams</Typography>
    </Container>
  )
};

export default SummarySquareProtein;