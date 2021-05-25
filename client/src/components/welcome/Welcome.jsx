import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SignInModal from './SignInModal.jsx';
import CreateAccountModal from './CreateAccountModal.jsx';
import Grid from '@material-ui/core/Grid';


const Welcome = () => {

  return (
    <Box>
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
    </Box>
  )
};

export default Welcome;