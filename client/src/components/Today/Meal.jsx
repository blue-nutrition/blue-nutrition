import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
const axios = require('axios');

//MaterialUI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

//Components
import AddWater from './AddWater.jsx';
import AddFood from './AddFood.jsx';


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
  const [foodModal, setFoodModal] = React.useState(false);
  const { today, setToday } = useContext(AppContext);
  const { tomorrow, setTomorrow } = useContext(AppContext);

  const handleWaterOpen = () => {
    setWaterModal(true);
  };

  const handleWaterClose = () => {
    setWaterModal(false);
  };

  const handleFoodOpen = () => {
    setFoodModal(true);
  };

  const handleFoodClose = () => {
    setFoodModal(false);
  };

  const handleWaterSubmit = (oz) => {
    setWaterModal(false);
    axios.post('/data/water', {userId: '5', date: new Date(), startDate: today, endDate: tomorrow, oz: oz, meal: props.name })
    .then((response) => {
      props.reRenderWater();
    })
    .catch((err) => {
      console.log(err);
    })
  }


  const handleFoodSubmit = (food) => {
    setFoodModal(false);
    axios.post('/data/food', food)
    .then((response) => {
      props.reRenderFood();
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
            <Button onClick={handleFoodOpen}>Add Food</Button>
            <Modal
              className={classes.modal}
              open={foodModal}
              onClose={handleFoodClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
              >
                <Fade in={foodModal}>
                  <div className={classes.paper}>
                    <AddFood meal={props.name} handleClose={handleFoodSubmit.bind(this)}/>
                  </div>
                </Fade>
            </Modal>

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
                    <AddWater meal={props.name} handleClose={handleWaterSubmit.bind(this)} currentWater={props.water}/>
                  </div>
                </Fade>
            </Modal>

          </Grid>
          <ul>
            {props.food.map((item) => {
              return(
                <li>{item.foodName}: ({item.calories} calories)</li>
              )
            })}
            <li>Water: {props.water} oz</li>
          </ul>
        </Grid>
      </div>
  )
};

export default Meal;