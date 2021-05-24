import React, { useContext, useEffect }from 'react';
import { ContextProvider } from './Context.jsx';
import API from './API.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import NavBar from './components/NavBar.jsx';

const App = (props) => {

  return (
    <div>
      <ContextProvider>
        <div>
          <Welcome />
          <NavBar/>
        </div>
      </ContextProvider>
    </div>
  )
};

export default App;