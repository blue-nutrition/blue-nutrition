import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EcoIcon from '@material-ui/icons/Eco';

const AtAGlanceSquareCarbs = (props) => {
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
    height: `${props.amt <= props.goal ? 100 - ((props.amt/props.goal)*100) : 100}%`,
    color: `${props.amt <= props.goal ? 'black' : 'red'}`
  }

  return (
    <Container>
      <Typography variant="h6" >Carbs</Typography>
      <div style={boxStyle}>
        <div style={iconDivStyle}>
          <EcoIcon style={iconStyle}/>
        </div>
        <div style={blackIconDivStyle}>
          <EcoIcon style={blackIconStyle} />
        </div>
      </div>
      <Typography variant="h6" >{props.amt} / {props.goal} grams</Typography>
    </Container>
  )
};

export default AtAGlanceSquareCarbs;