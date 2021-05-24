import React, { useContext, useEffect }from 'react';
import { ContextProvider } from './Context.jsx';
import API from './API.jsx';
import Welcome from './components/welcome/Welcome.jsx';

const App = (props) => {

  return (
    <div>
      <ContextProvider>
        <div>
          <Welcome />
        </div>
      </ContextProvider>
    </div>
  )
};

export default App;