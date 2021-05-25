import React, { useContext, useState }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';
import Box from '@material-ui/core/Box';
import GoogleButton from './GoogleButton.jsx'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const getModalStyle = () => {
  const top = 50;
  const left = 50;
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
    textAlign: 'center',
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // textAlign: 'center',
  },
}));

const CreateAccountModal = () => {

  const {userId, setUserId, userGoals, setUserGoals} = useContext(AppContext);

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleAccountCreation = (e) => {
    e.preventDefault();
    e.persist();
    console.log('New User Info: ', userId, userGoals);
    return false;
  }

  return (
  <Container>
    <Button onClick={handleOpen}>
      <h6>Create Account</h6>
    </Button>
    <Modal
      className={classes.modal}
      disableScrollLock={false}
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Container>
      <div style={modalStyle} className={classes.paper}>
        <h2>Please Sign in with Google and Enter Your Goals</h2>
        <GoogleButton />
        <h6>Set Your Baseline</h6>
        <div>
          <FormControl>
            <Input
              id="current-weight"
              type="number" name="weight"
              value={userGoals.weight}
              onChange={(e) => setUserGoals({
                ...userGoals,
                [e.target.name]: e.target.value
              })}
            />
            <FormHelperText id="current-weight-helper-text">{`Current Weight in lbs. (optional)`}</FormHelperText>
          </FormControl>
        </div>
        <h6>Set Your Daily Goals</h6>
        <FormControl>
          <Input
            id="water-consumption"
            type="number" name="water"
            value={userGoals.water}
            onChange={(e) => setUserGoals({
              ...userGoals,
              [e.target.name]: e.target.value
            })}
          />
          <FormHelperText id="water-consumption-helper-text">Water Consumption in oz.</FormHelperText>
        </FormControl>
        <div>
        <FormControl>
          <Input
            id="calorie-intake"
            type="number" name="calories"
            value={userGoals.calories}
            onChange={(e) => setUserGoals({
              ...userGoals,
              [e.target.name]: e.target.value
            })}
          />
          <FormHelperText id="calorie-intake-helper-text">Calorie Intake in kcals.</FormHelperText>
        </FormControl>
        </div>
        <div>
        <FormControl>
          <Input
            id="protein-macros"
            type="number" name="protein"
            value={userGoals.protein}
            onChange={(e) => setUserGoals({
              ...userGoals,
              [e.target.name]: e.target.value
            })}
          />
            <FormHelperText id="protein-macros-helper-text">Protein Macros</FormHelperText>
        </FormControl>
        </div>
        <div>
        <FormControl>
          <Input
            id="carbs-macros"
            type="number" name="carbs"
            value={userGoals.carbs}
            onChange={(e) => setUserGoals({
              ...userGoals,
              [e.target.name]: e.target.value
            })}
          />
            <FormHelperText id="carbs-macros-helper-text">Carbohydrates Macros</FormHelperText>
        </FormControl>
        </div>
        <div>
          <FormControl>
          <Input
            id="fat-macros"
            type="number" name="fats"
            value={userGoals.fats}
            onChange={(e) => setUserGoals({
              ...userGoals,
              [e.target.name]: e.target.value
            })}
          />
            <FormHelperText id="fat-macros-helper-text">Fat Macros</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl>
          <Input
            id="goal-weight"
            type="number" name="goalWeight"
            value={userGoals.goalWeight}
            onChange={(e) => setUserGoals({
              ...userGoals,
              [e.target.name]: e.target.value
            })}
          />
            <FormHelperText id="goal-weight-helper-text">{`Goal Weight in lbs. (optional)`}</FormHelperText>
          </FormControl>
        </div>
        <Grid container justify="center">
          <Grid item>
            <Button  onClick={handleAccountCreation}>Create Account</Button>
          </Grid>
        </Grid>
      </div>
      </Container>
    </Modal>
  </Container>
  )
};

export default CreateAccountModal;