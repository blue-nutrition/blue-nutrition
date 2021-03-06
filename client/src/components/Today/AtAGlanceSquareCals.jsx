import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';

const AtAGlanceSquareCals = (props) => {
  const boxStyle = {
    width: '75px',
    height: '75px',
    position: 'relative',
    overflow: 'hidden',
    margin: 'auto'
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
    color: `${props.amt <= props.goal ? 'black' : 'red'}`
  }

  return (
    <Container>
      <Typography variant="h6" >Calories</Typography>
      <div style={boxStyle}>
        <div style={iconDivStyle}>
          <RestaurantIcon style={iconStyle}/>
        </div>
        <div style={blackIconDivStyle}>
          <RestaurantIcon style={blackIconStyle} />
        </div>
      </div>
      <Typography variant="h6" >{props.amt} / {props.goal} kcal</Typography>
    </Container>
  )
};

export default AtAGlanceSquareCals;