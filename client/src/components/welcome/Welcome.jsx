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
    marginTop: '5%',
    padding: '2.5%',
    backgroundColor: 'rgba(255, 255, 255, .10)',
    backdropFilter: 'blur(4px)',
    boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
    maxWidth: '750px'
  }
}))

const Welcome = () => {
  const {loggedIn} =useContext(AppContext);
  const classes = useStyles();

  return (
    <>
    {!loggedIn && (
      <Container>
        <Grid container justify="center">
           <div data-testid="welcome" className={classes.landing}>
            <Grid item>
              <Typography variant="h4">
                Please Sign In or Create Account to continue.
              </Typography>
              <div>
                <SignInModal />
                <CreateAccountModal />
              </div>
            </Grid>
           </div>
         </Grid>
      </Container>
    )}
    {loggedIn &&(
      <NavBar/>
    )}
    </>
  )
};

export default Welcome;