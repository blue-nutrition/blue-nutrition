/* eslint-disable react/prop-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const SummarySquare = (props) => {
  const timePeriod = props.period
  const {title, image, unit, amount} = props;

  const boxStyle = {
    maxWidth: '160px',
    maxHeight: '160px',
    width: '15vw',
    height: '15vw',
    border: '2px solid #DBE7E4',
    position: 'relative',
    boxShadow: 'rgba(23, 51, 71, 0.3) 0px 19px 19px, rgba(23, 51, 71, 0.22) 0px 15px 12px',
    backgroundColor: '#D6E2E9',
    textAlign: 'center'
  }


  return (
    <div>
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item xs={12}>
      <Typography variant="h6">{title}</Typography>
        </Grid>
      <div style={boxStyle}>
        {props.metric}
        <Grid item>
        <Typography variant="subtitle2">Your {timePeriod} Avg</Typography>
          </Grid>
          <Grid container>
            <Grid item xs={12} justify="center">
            <img src={image} style={{height: '75px' }}/>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={7} style={{textAlign:'left'}}>
            {title} Intake:
            </Grid>
            <Grid item xs={5} style={{textAlign:'right'}}>
            {amount} {unit}
            </Grid>
          </Grid>
      </div>
    </Grid>
    </div>
  )
};

export default SummarySquare;