import React, { useContext, useState }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';
import Container from '@material-ui/core/Container';
import GoogleButton from './GoogleButton.jsx'


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
    textAlign: 'center',
  },
}));

const SignInModal = () => {
  const {userId, setUserId, setLoggedIn, email, setEmail, postUser} = useContext(AppContext);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const userData = {
    email,
    userId,
  }

  const onSuccess = (res) => {
    // console.log(res.profileObj);
    setUserId(res.profileObj.googleId);
    setEmail(res.profileObj.email);
    postUser(userData, null, handleClose);
    setLoggedIn(true);

    // console.log(email);
  };

  const onFailure = (res) => {
    console.log(res);
  }

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  return (
  <Container>
    <Button onClick={handleOpen}>
      <h6>Sign In</h6>
    </Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Container>
      <div style={modalStyle} className={classes.paper}>
        <h2>Please Sign In</h2>
        <GoogleLogin
          clientId="223117457103-m37me8ugrqlb9nn8o2i48dr96arojlfv.apps.googleusercontent.com"
          buttonText="Login to Salut"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
      </Container>
    </Modal>
  </Container>
  )
};

export default SignInModal;