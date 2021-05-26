import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Button from '@material-ui/core/Button';
import { GoogleLogout, useGoogleLogout } from 'react-google-login';
import Container from '@material-ui/core/Container';

const LogoutGoogle = () => {

  const { userId, setUserId, email, setEmail, setLoggedIn, loggedIn} = useContext(AppContext);


  const logout = (res) => {
    // console.log(res.profileObj);
    // console.log('success response: ', res);
    setUserId(null);
    setEmail('');
    setLoggedIn(false);
    console.log('LoggedIn?', loggedIn);
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(
        auth2.disconnect().then(setLoggedIn(false))
      )
    }
    // console.log(email);
  };

  const onFailure = (res) => {
    console.log(res);
  }

  return (
    <div className="g-signin2" data-width="300" data-height="200" data-longtitle="true">
      <GoogleLogout
        clientId="223117457103-m37me8ugrqlb9nn8o2i48dr96arojlfv.apps.googleusercontent.com"
        buttonText="Logout from Salut"
        cookiePolicy={'single_host_origin'}
        onLogoutSuccess={logout}
        onFailure={onFailure}
      />
    </div>
  )
};

export default LogoutGoogle;