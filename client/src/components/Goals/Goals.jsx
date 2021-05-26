import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context.jsx';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditGoals from './EditGoals.jsx';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  paper: {
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    width: '100%',
    padding: '1.5rem'
  },
  // paper: {
  //   position: 'absolute',
  //   width: 450,
  //   backgroundColor: theme.palette.background.paper,
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
  modalPaper: {
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    width: 'auto',
    padding: '1.5rem'
  }
}));

const goalsContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const goalsStyle = {
  maxWidth: 'lg',
  minHeight: '20%',
  borderRadius: '5px',
  marginBottom: '3vh',
  marginTop: '4vh',
  boxShadow: 'rgba(23, 51, 71, 0.3) 0px 19px 19px, rgba(23, 51, 71, 0.22) 0px 15px 12px',
}

const titleStyle = {
  margin: '3vh'
}

const subtitleStyle = {
  margin: '1vh'
}

let Goals = () => {



  const { userGoals } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div id="goals" className={"mainContainer"} style={goalsContainer}>
      <div style={goalsStyle}>
        <Typography variant="h3" style={titleStyle}>Your Nutrition Goals</Typography>
        <Button
          onClick={handleOpen}
        >Edit Goals
        </Button>
        <Modal
              className={classes.modal}
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
        >
          <div
              className={classes.modalPaper}
          >
            <EditGoals
              handleClose={handleClose}
            />
          </div>
        </Modal>
        <TableContainer component={Paper}>
          <Table className={classes.paper}>
            <TableHead>
              <TableRow>
                <TableCell><b>Your current weight:  (optional)</b></TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>{userGoals.weight} lbs </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        <Typography variant="h6" style={subtitleStyle}>Your Goals</Typography>
        <TableContainer component={Paper}>
          <Table className={classes.paper}>
            <TableHead>
              <TableRow>
                <TableCell><b>Water Consumption</b></TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>{userGoals.water} oz</TableCell>
            </TableRow>
            <TableHead>
              <TableRow>
                <TableCell><b>Caloric Intake</b></TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>{userGoals.calories} kcal</TableCell>
            </TableRow>
            <TableHead>
              <TableRow>
                <TableCell><b>Protein Macros</b></TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>{userGoals.protein} g</TableCell>
            </TableRow>
            <TableHead>
              <TableRow>
                <TableCell><b>Carbohydrate Macros</b></TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>{userGoals.carbs} g</TableCell>
            </TableRow>
            <TableHead>
              <TableRow>
                <TableCell><b>Fat Macros</b></TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>{userGoals.fats} g</TableCell>
            </TableRow>
            <TableHead>
              <TableRow>
                <TableCell><b>Goal Weight (optional)</b></TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>{userGoals.goalWeight} lbs</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default Goals;
