import React, { useState, useContext }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal'
import EditDay from './EditDay.jsx';

const SummarySquare = (props) => {
  const timePeriod = props.period;
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: 'white',
      width: 'auto',
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
      paddingRight:'1.5rem',
      paddingLeft:'1.5rem'
    },
  }));

  const boxStyle = {
    maxWidth: '150px',
    maxHeight: '150px',
    width: '15vw',
    height: '15vw',
    border: '2px solid #DBE7E4',
    position: 'relative'
  }

  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const editButton = timePeriod !== 'daily' ? '' : <Button variant="contained" onClick={handleClick}>Edit</Button>


  return (
    <div>
    <Grid container justify="flex-start" alignItems="flex-start">
      <Grid item xs={12}>
      <Typography variant="h6">Time Period</Typography>
        </Grid>
      <div style={boxStyle}>
        {props.metric}
        food
        water
        <div style={{ position:'absolute', bottom:0, right:0 }}>
      {editButton}
        </div>
      </div>
    </Grid>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Edit Day"
        aria-describedby="Edit Your Day"
        className={classes.modal}
      >
        <div className={classes.paper}>
          <EditDay/>
        </div>
      </Modal>
    </div>
  )
};

export default SummarySquare;