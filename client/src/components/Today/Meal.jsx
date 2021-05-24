import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const mealStyle = {
  maxHeight: '150px',
  width: '100%',
  height: '15vw',
  borderRadius: '5px',
  boxShadow: 'rgba(23, 51, 71, 0.3) 0px 19px 19px, rgba(23, 51, 71, 0.22) 0px 15px 12px'
}

const Meal = (props) => {

  return (
    <Container>
      <div style={mealStyle}>
        <Typography variant="h5">{props.name}</Typography>

      </div>
    </Container>
  )
};

export default Meal;