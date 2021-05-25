import React, { useContext, useEffect }from 'react';
import { ContextProvider } from './Context.jsx';
import API from './API.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import NavBar from './components/NavBar.jsx';
import Container from '@material-ui/core/Container';

const App = (props) => {

  return (
    <div style={{backgroundImage: 'url(./henry-co-tqu0IOMaiU8-unsplash.jpg)', backgroundSize: 'cover', height: '100vh'}}>
      <ContextProvider>
<<<<<<< HEAD
        <div>
          <Welcome />
=======
        <Container maxWidth="lg" >
>>>>>>> origin/today
          <NavBar/>
        </Container>
      </ContextProvider>
    </div>
  )
};

export default App;