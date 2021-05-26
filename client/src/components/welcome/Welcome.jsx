import React, { useContext }from 'react';
import { AppContext } from '../../Context.jsx';
import Typography from '@material-ui/core/Typography';
import SignInModal from './SignInModal.jsx';
import CreateAccountModal from './CreateAccountModal.jsx';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar.jsx';

const useStyles = makeStyles(() => ({
  landing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
}))

const Welcome = () => {
  const {loggedIn} =useContext(AppContext);
  const classes = useStyles();

  return (
    <>
    {!loggedIn && (
      <Container>
        <div className={classes.landing}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h6">
              Please Sign In or Create Account to continue.
            </Typography>
            <SignInModal />
            <CreateAccountModal />
          </Grid>
        </Grid>
        </div>
      </Container>
    )}
    {loggedIn &&(
      <NavBar/>
    )}
    </>
  )
};

export default Welcome;