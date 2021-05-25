import React, { useContext }from 'react';
import { ContextProvider, AppContext } from '../../Context.jsx';
import Button from '@material-ui/core/Button';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';

const GoogleButton = () => {

  const { userId, setUserId } = useContext(AppContext);


  const onSuccess = (res) => {
    console.log(res.profileObj);
    setUserId(res.profileObj.googleId);
    console.log(userId);
  };

  const onFailure = (res) => {
    console.log(res);
  }

  return (
    <div class="g-signin2" data-width="300" data-height="200" data-longtitle="true">
    <GoogleLogin
      clientID="223117457103-m37me8ugrqlb9nn8o2i48dr96arojlfv.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  </div>
  )
};

export default GoogleButton;