import React, { useContext }from 'react';
import {  AppContext } from '../../Context.jsx';
import { GoogleLogout } from 'react-google-login';

const LogoutGoogle = () => {

  const { setUserId, setEmail, setLoggedIn, loggedIn, setUserGoals, setUserName} = useContext(AppContext);

  const logout = (/*res*/) => {
    // console.log(res.profileObj);
    // console.log('success response: ', res);
    setUserId(null);
    setEmail('');
    setUserGoals({});
    setUserName({
      familyName: '',
      givenName: '',
    });
    setLoggedIn(false);
    // console.log('LoggedIn?', loggedIn);
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(
        auth2.disconnect().then(setLoggedIn(false))
      )
    }
    // console.log(email);
  };

  return (
    <div data-width="300" data-height="200" data-longtitle="true">
      <GoogleLogout
        clientId="223117457103-m37me8ugrqlb9nn8o2i48dr96arojlfv.apps.googleusercontent.com"
        buttonText="Logout from Salut"
        cookiePolicy={'single_host_origin'}
        onLogoutSuccess={logout}
      />
    </div>
  )
};

export default LogoutGoogle;