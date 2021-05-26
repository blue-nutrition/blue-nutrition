import React, { useContext, useState }from 'react';
import { ContextProvider, AppContext } from '../Context.jsx';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LogoutGoogle from './welcome/LogoutGoogle.jsx';

export default function SalutAppBar() {
  const [value, setValue] = React.useState(0);
  const { email } = useContext(AppContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">SALUT NUTRITION</Typography>
        <div style={{marginLeft: 'auto', padding: '0 10px'}}>Logged in as: {email}</div>
        <div><LogoutGoogle/></div>
      </Toolbar>
    </AppBar>
  );
}