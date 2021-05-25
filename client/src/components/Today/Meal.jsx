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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

//Components
import AddWater from './AddWater.jsx';
import AddFood from './AddFood.jsx';


const mealStyle = {
  width: '100%',
  minHeight: '20%',
  borderRadius: '5px',
  marginBottom: '3vh',
  marginTop: '3vh',
  boxShadow: 'rgba(23, 51, 71, 0.3) 0px 19px 19px, rgba(23, 51, 71, 0.22) 0px 15px 12px',
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
      width: '100%',
      padding: '1.5rem'
    },
    modalPaper: {
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      width: 'auto',
      padding: '1.5rem'
    }
  }));

  const classes = useStyles();
  const [waterModal, setWaterModal] = React.useState(false);
  const [foodModal, setFoodModal] = React.useState(false);
  const [currentFood, setCurrentFood] = React.useState({});
  const { today, setToday } = useContext(AppContext);
  const { tomorrow, setTomorrow } = useContext(AppContext);

  const handleWaterOpen = () => {
    setWaterModal(true);
  };

  const handleWaterClose = () => {
    setWaterModal(false);
  };

  const handleFoodOpen = (food) => {
    setCurrentFood(food);
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
          <Grid item xs={6}>
            <Typography variant="h5" style={{padding: '6px 8px'}}>{props.name}</Typography>
          </Grid>
          <Grid item xs={6} container direction="row-reverse">
            <Grid item>

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
                    <div className={classes.modalPaper}>
                      <AddFood meal={props.name} handleClose={handleFoodSubmit.bind(this)} currentFood={currentFood}/>
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
                    <div className={classes.modalPaper}>
                      <AddWater meal={props.name} handleClose={handleWaterSubmit.bind(this)} currentWater={props.water}/>
                    </div>
                  </Fade>
              </Modal>
            </Grid>



          </Grid>
          <TableContainer component={Paper}>
            <Table className={classes.paper}>
              <TableHead>
                <TableRow>
                  <TableCell><b>Food item</b></TableCell>
                  <TableCell align="right"><b>Calories&nbsp;(kcal)</b></TableCell>
                  <TableCell align="right"><b>Fat&nbsp;(g)</b></TableCell>
                  <TableCell align="right"><b>Carbs&nbsp;(g)</b></TableCell>
                  <TableCell align="right"><b>Protein&nbsp;(g)</b></TableCell>
                  <TableCell align="right"><b>Edit/Delete</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.food.map((item) => {
                  return(
                    <TableRow key={item._id}>
                      <TableCell>{item.foodName}</TableCell>
                      <TableCell align="right">{item.calories}</TableCell>
                      <TableCell align="right">{item.fat}</TableCell>
                      <TableCell align="right">{item.carbs}</TableCell>
                      <TableCell align="right">{item.protein}</TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <EditIcon onClick={() => handleFoodOpen({foodName: item.foodName, calories: item.calories, fat: item.fat, carbs: item.carbs, protein: item.protein, _id: item._id})} />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })}
                <TableRow>
                  <TableCell>Water: {props.water} oz</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>


        </Grid>
      </div>
  )
};

export default Meal;