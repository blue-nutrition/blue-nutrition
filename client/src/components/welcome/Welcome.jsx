import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SignInModal from './SignInModal.jsx';
import CreateAccountModal from './CreateAccountModal.jsx';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  landing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
}))

const Welcome = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.landing}>
      <Grid container justify="center">
        <Grid item>
          <Typography>
            <h1>Welcome to Salut!</h1>
            <h6>Please Login or Sign Up to continue.</h6>
            <SignInModal />
            <CreateAccountModal />
          </Typography>
        </Grid>
      </Grid>
      </div>
    </Container>
  )
};

export default Welcome;