import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const boxStyle = {
  maxWidth: '150px',
  maxHeight: '150px',
  width: '15vw',
  height: '15vw',
  border: '2px solid #DBE7E4'
}

const AtAGlanceSquare = (props) => {

  return (
    <Container>
      <div style={boxStyle}>
        {props.metric}
      </div>
      <Typography variant="h6"># / # {props.unit}</Typography>
    </Container>
  )
};

export default AtAGlanceSquare;