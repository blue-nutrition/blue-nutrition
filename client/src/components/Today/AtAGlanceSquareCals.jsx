import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';

const AtAGlanceSquareCals = (props) => {
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
    height: `${100 - ((props.amt/2000)*100)}%`
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
      <Typography variant="h6" >{props.amt} / 2000 kcal</Typography>
    </Container>
  )
};

export default AtAGlanceSquareCals;