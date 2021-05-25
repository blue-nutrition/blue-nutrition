import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';

const AtAGlanceSquareWater = (props) => {
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
    height: `${100 - ((props.amt/74)*100)}%`
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
      <Typography variant="h6">{props.amt} / 74 {props.unit}</Typography>
    </Container>
  )
};

export default AtAGlanceSquareWater;