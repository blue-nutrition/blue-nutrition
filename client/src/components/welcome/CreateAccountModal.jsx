import React, { useContext, useState }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';
import Box from '@material-ui/core/Box';
import GoogleButton from './GoogleButton.jsx'

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
    overflow: 'hidden'
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
  },
}));

const CreateAccountModal = () => {

  const {userId, setUserId, newUserPackage, setNewUserPackage} = useContext(AppContext);

  const onSuccess = (res) => {
    setUserId(res.profileObj.googleId);
  };

  const onFailure = (res) => {
    console.log(res);
  }

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
    console.log('New User Info: ', userId, newUserPackage);
    return false;
  }

  return (
  <Box>
    <Button type="button"
      onClick={handleOpen}
      variant="contained" color="primary"
    >
      <h6>Create Account</h6>
    </Button>
    <Modal
    className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <h2>Please Enter Your Goals</h2>
        <GoogleLogin
          clientID="223117457103-m37me8ugrqlb9nn8o2i48dr96arojlfv.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
        <h6>Set Your Baseline</h6>
        <label>
          <h6>Current Weight</h6>
          <input type="number" name="currentWeight"
            value={newUserPackage.currentWeight}
            onChange={(e) => setNewUserPackage({
              ...newUserPackage,
              [e.target.name]: e.target.value
            })}
          />
          <h6>{`lbs. (optional)`}</h6>
        </label>
        <h1>Set Your Daily Goals</h1>
        <label>
          <t>Water Consumption</t>
          <input type="number" name="waterConsumption"
            value={newUserPackage.waterConsumption}
            onChange={(e) => setNewUserPackage({
              ...newUserPackage,
              [e.target.name]: e.target.value
            })}
          />
          <h6>oz.</h6>
        </label>
        <label>
          <h6>Caloric Intake</h6>
          <input type="number" name="caloricIntake"
            value={newUserPackage.caloricIntake}
            onChange={(e) => setNewUserPackage({
              ...newUserPackage,
              [e.target.name]: e.target.value
            })}
          />
          <h6>kcals</h6>
        </label>
        <label>
          <h6>Protein Macros</h6>
          <input type="number" name="proteinMacros"
            value={newUserPackage.proteinMacros}
            onChange={(e) => setNewUserPackage({
              ...newUserPackage,
              [e.target.name]: e.target.value
            })}
          />
        </label>
        <label>
          <h6>Carbohydrates Macros</h6>
          <input type="number" name="carbMacros"
            value={newUserPackage.carbMacros}
            onChange={(e) => setNewUserPackage({
              ...newUserPackage,
              [e.target.name]: e.target.value
            })}
          />
        </label>
        <label>
          <h6>Fat Macros</h6>
          <input type="number" name="fatMacros"
            value={newUserPackage.fatMacros}
            onChange={(e) => setNewUserPackage({
              ...newUserPackage,
              [e.target.name]: e.target.value
            })}
          />
        </label>
        <label>
          <h6>Goal Weight</h6>
          <input type="number" name="goalWeight"
            value={newUserPackage.goalWeight}
            onChange={(e) => setNewUserPackage({
              ...newUserPackage,
              [e.target.name]: e.target.value
            })}
          />
          <h6>{`lbs. (optional)`}</h6>
        </label>
        <Button varient="contained" color="primary"
        onClick={handleAccountCreation}>
          <h6>Create Account</h6>
        </Button>
      </div>
    </Modal>
  </Box>
  )
};

export default CreateAccountModal;