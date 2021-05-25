import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SignInModal from './SignInModal.jsx';
import CreateAccountModal from './CreateAccountModal.jsx';

const Welcome = () => {

  return (
    <Box>
      <Typography>
        <h1>Welcome to Salut!</h1>
        <h6>Please Login or Sign Up to continue.</h6>
        <SignInModal />
        <CreateAccountModal />
      </Typography>
    </Box>
  )
};

export default Welcome;