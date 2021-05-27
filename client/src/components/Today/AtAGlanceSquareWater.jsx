import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';

const AtAGlanceSquareWater = (props) => {
  const boxStyle = {
    width: '75px',
    height: '75px',
    position: 'relative',
    overflow: 'hidden'
  }

  const iconStyle = {
    fontSize: '75px',
    color: "#BCD4E6",
  }
  const iconDivStyle = {
    overflow: 'hidden',
    position: 'absolute',
    top: '0',
    left: '0'
  }

  const blackIconStyle ={
    fontSize: '75px',
  }

  const blackIconDivStyle = {
    overflow: 'hidden',
    position: 'absolute',
    top: '0',
    left: '0',
    height: `${props.amt <= props.goal ? 100 - ((props.amt/props.goal)*100) : 100}%`,
    color: `${props.amt <= props.goal ? 'black' : '#99C1DE'}`
  }

  return (
    <Container>
      <Typography variant="h6" >Water</Typography>
      <div style={boxStyle}>
        <div style={iconDivStyle}>
          <LocalDrinkIcon style={iconStyle}/>
        </div>
        <div style={blackIconDivStyle}>
          <LocalDrinkIcon style={blackIconStyle} />
        </div>
      </div>
      <Typography variant="h6">{props.amt} / {props.goal} {props.unit}</Typography>
    </Container>
  )
};

export default AtAGlanceSquareWater;