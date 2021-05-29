import React from 'react';
import { ContextProvider } from './Context.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import Container from '@material-ui/core/Container';

import SalutAppBar from './components/SalutAppBar.jsx';


const App = () => {

  return (
    <div style={{backgroundImage: 'url(./henry-co-tqu0IOMaiU8-unsplash.jpg)', backgroundSize: 'cover', height: '100vh'}}>
      <ContextProvider>
        <Container maxWidth="lg" >
          <SalutAppBar/>
          <Welcome />
        </Container>
      </ContextProvider>
    </div>
  )
};

export default App;
