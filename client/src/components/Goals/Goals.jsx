import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context.jsx';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditGoals from './EditGoals.jsx';

const rand = () => (
  Math.round(Math.random() * 20) - 10
)

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

let Goals = () => {
  const { userGoals } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div id="goals">
      <h1>Your Nutrition Goals!</h1>
      <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        color="primary"
      >
        <h6>Edit Goals</h6>
      </Button>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
      >
        <div
            style={modalStyle}
            className={classes.paper}
        >
          <EditGoals
            handleClose={handleClose}
          />
        </div>
      </Modal>
      <h2>Your current weight: {userGoals.weight} lbs (optional)</h2>
      <h2>Your Goals</h2>
      <h3>Water Consumption {userGoals.water} oz</h3>
      <h3>Caloric Intake {userGoals.calories} kcal</h3>
      <h3>Protein Macros {userGoals.protein} g</h3>
      <h3>Carbohydrate Macros {userGoals.carbs} g</h3>
      <h3>Fat Macros {userGoals.fats} g</h3>
      <h3>Goal Weight {userGoals.goalWeight} lbs</h3>
    </div>
  )
}

export default Goals;
