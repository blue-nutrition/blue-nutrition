import React, { useContext, useEffect }from 'react';
import { ContextProvider } from './Context.jsx';
import API from './API.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import NavBar from './components/NavBar.jsx';
import Container from '@material-ui/core/Container';
import LogoutGoogle from './components/welcome/LogoutGoogle.jsx';

const App = (props) => {

  return (
    <div style={{backgroundImage: 'url(./henry-co-tqu0IOMaiU8-unsplash.jpg)', backgroundSize: 'cover', height: '100vh'}}>
      <ContextProvider>
        <Container maxWidth="lg" >
<<<<<<< HEAD
          <Welcome />
=======
          <NavBar/>
>>>>>>> 7a65fd1022d43159630e1f0feb526482f1dcc0c4
          <LogoutGoogle />
        </Container>
      </ContextProvider>
    </div>
  )
};

export default App;