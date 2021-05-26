import React, { useContext, useState, useEffect }from 'react';
import { AppContext } from '../../Context.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { GoogleLogin } from 'react-google-login';
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
    textAlign: 'center',
  },
}));

const SignInModal = () => {
  const {userId, setUserId, setLoggedIn, setEmail, getUser} = useContext(AppContext);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // console.log(userId);
    if (userId !== null) {
      getUser(handleClose);
    }
  }, [userId]);

  const onSuccess = (res) => {
    // console.log(res.profileObj);
    setUserId(res.profileObj.googleId);
    setEmail(res.profileObj.email);
    setLoggedIn(true);
    // console.log(userId);
    // getUser(userId, handleClose);
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
  <>
    <Button onClick={handleOpen} variant="contained" size="large">
      Sign In
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
  </>
  )
};

export default SignInModal;