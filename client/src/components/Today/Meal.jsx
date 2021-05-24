import React, { useContext }from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const mealStyle = {
  maxHeight: '150px',
  width: '100%',
  height: '15vw',
  borderRadius: '5px',
  boxShadow: 'rgba(23, 51, 71, 0.3) 0px 19px 19px, rgba(23, 51, 71, 0.22) 0px 15px 12px',
  margin: '5% 0'
}

const Meal = (props) => {
  return (
      <div style={mealStyle}>
        <Grid container>
          <Grid item xs={1}>
            <Typography variant="h5" style={{padding: '6px 8px'}}>{props.name}</Typography>
          </Grid>
          <Grid item xs={9}>
          </Grid>
          <Grid item xs={2}>
            <Button>Add Food</Button>
            <Button>Add Water</Button>
          </Grid>
        </Grid>
      </div>
  )
};

export default Meal;