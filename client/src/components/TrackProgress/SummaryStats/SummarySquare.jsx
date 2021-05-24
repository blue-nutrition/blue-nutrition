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
  const {dateRange} = props;
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#F0EFEB',
      width: 'auto',
      paddingTop: '1.0rem',
      paddingBottom: '1.0rem',
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
    position: 'relative',
    boxShadow: 'rgba(23, 51, 71, 0.3) 0px 19px 19px, rgba(23, 51, 71, 0.22) 0px 15px 12px',
    backgroundColor: '#D6E2E9'
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
    <Grid container>
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