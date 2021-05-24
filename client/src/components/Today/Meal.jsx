import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddWater from './AddWater.jsx';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
const axios = require('axios');

const mealStyle = {
  maxHeight: '150px',
  width: '100%',
  height: '15vw',
  borderRadius: '5px',
  boxShadow: 'rgba(23, 51, 71, 0.3) 0px 19px 19px, rgba(23, 51, 71, 0.22) 0px 15px 12px',
  margin: '5% 0'
}

const Meal = (props) => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      width: 'auto',
      padding: '1.5rem'
    },
  }));

  const classes = useStyles();
  const [waterModal, setWaterModal] = React.useState(false);
  const { today, setToday } = useContext(AppContext);
  const { tomorrow, setTomorrow } = useContext(AppContext);

  const handleWaterOpen = () => {
    setWaterModal(true);
  };

  const handleWaterClose = () => {
    setWaterModal(false);
  };

  const handleWaterSubmit = (oz) => {
    setWaterModal(false);
    axios.post('/data/water', {userId: '5', date: new Date(), startDate: today, endDate: tomorrow, oz: oz, meal: props.name })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  }

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
            <Button onClick={handleWaterOpen}>Add Water</Button>
            <Modal
              className={classes.modal}
              open={waterModal}
              onClose={handleWaterClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
              >
                <Fade in={waterModal}>
                  <div className={classes.paper}>
                    <AddWater meal={props.name} handleClose={handleWaterSubmit.bind(this)}/>
                  </div>
                </Fade>
          </Modal>

          </Grid>
        </Grid>
      </div>
  )
};

export default Meal;