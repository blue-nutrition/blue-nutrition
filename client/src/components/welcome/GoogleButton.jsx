import React, { useContext }from 'react';
import { AppContext } from '../../Context.jsx';
import { GoogleLogin } from 'react-google-login';

const GoogleButton = () => {

  const { setUserId, setEmail } = useContext(AppContext);


  const onSuccess = (res) => {
    // console.log(res.profileObj);
    setUserId(res.profileObj.googleId);
    setEmail(res.profileObj.email);
    // console.log(email);
  };

  const onFailure = (res) => {
    console.log(res);
  }

  return (
    <div className="g-signin2" data-width="300" data-height="200" data-longtitle="true">
    <GoogleLogin
      clientId="223117457103-m37me8ugrqlb9nn8o2i48dr96arojlfv.apps.googleusercontent.com"
      buttonText="Create Account with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  </div>
  )
};

export default GoogleButton;