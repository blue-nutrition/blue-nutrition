import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';
import authKey from '../../authKeys.js';
import SignInModal from './SignInModal.jsx';

const Welcome = () => {

  const {loginModalOpen, setLoginModalstate, createAccountModalOpen, setCreateAccountModalstate} = useContext(AppContext);

  const {signIn, loaded } = useGoogleLogin({
    onSuccess,
    onFailure,
    // authKey,
    isSignedIn: true,
    accessType: 'offline'
  })

  function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
  };

  const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

  const loginModalHandleClose = () => {
    setLoginModalstate(false);
  };
  const loginModalHandleOpen = () => {
    setLoginModalstate(true);
  };

  const createAccountHandleOpen = () => {
    setCreateAccountModalstate(true);
  };
  const createAccountHandleClose = () => {
    setCreateAccountModalstate(false);
  }

  const createAccountModal = () => (
    <h1>This is the Create Account Modal</h1>
  )

  const onSuccess = (res) => {
    console.log(res.profileObj);
  };

  const onFailure = (res) => {
    console.log(res);
  }

  const signInModal = () => (
   <Box>
      <GoogleLogin
        clientID="223117457103-m37me8ugrqlb9nn8o2i48dr96arojlfv.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      <h1>this is the sign in modal</h1>
   </Box>

  );


  return (
    <Box>
      <Typography>
        <h1>Welcome to Blue Nutrition!</h1>
        <h6>Please Login or Sign Up to continue.</h6>
        <Button onClick={createAccountModal}>
          <h6>Create New Account</h6>
        </Button>
        <Modal
          open={createAccountModalOpen}
          onClose={createAccountHandleClose}
        >
          <Box>

          </Box>
        </Modal>
        <Button type="button"
          onClick={loginModalHandleOpen}
          variant="contained" color="primary"
        >
          <h6>Sign In</h6>
        </Button>
        <Modal
          open={loginModalOpen}
          onClose={loginModalHandleClose}
        >
          <SignInModal />
      </Modal>
      </Typography>
    </Box>
  )
};

export default Welcome;