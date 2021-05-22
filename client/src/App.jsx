import React, { useContext, useEffect }from 'react';
import { ContextProvider } from './Context.jsx';
import API from './API.jsx';
import NavBar from './components/NavBar.jsx';

const App = (props) => {

  return (
    <div>
      <ContextProvider>
        <div>
          <NavBar/>
        </div>
      </ContextProvider>
    </div>
  )
};

export default App;