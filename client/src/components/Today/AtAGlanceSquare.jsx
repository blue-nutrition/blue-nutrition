import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';

const boxStyle = {
  maxWidth: '150px',
  maxHeight: '150px',
  width: '15vw',
  height: '15vw',
  border: '2px solid #DBE7E4',
  position: 'relative'
}

const iconStyle = {
  fontSize: '100px',
  position: 'absolute',
  top: '0',
  left: '0'
}

const colorIconStyle ={
  fontSize: '100px',
  position: 'absolute',
  color: "#D6E2E9",
  top: '0',
  left: '0'
}
const AtAGlanceSquare = (props) => {

  return (
    <Container>
      <div style={boxStyle}>
        <LocalDrinkIcon style={iconStyle}/>
        <LocalDrinkIcon style={colorIconStyle} />
      </div>
      <Typography variant="h6">{props.amt} / ? {props.unit}</Typography>
    </Container>
  )
};

export default AtAGlanceSquare;