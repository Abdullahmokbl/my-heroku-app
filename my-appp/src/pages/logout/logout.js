import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import { log_out } from "../../actions/types";

import { GoogleLogin } from 'react-google-login';

import FacebookLogin from 'react-facebook-login';

const Logout = ({log_out}) => {

  // useEffect(()=>{
  //   log_out()
  // },[])

  console.log('mmmmmm')

  const responseFacebook = (response) => {
    console.log(response);
  }
  
  const responseGoogle = (response) => {
    console.log(response);
  }

  // FB.login(function(response) {
  //   console.log(response);
  // }, {scope: 'user_birthday'});

  
    // const f = {
    //             status: 'connected',
    //             authResponse: {
    //                 accessToken: '...',
    //                 expiresIn:'...',
    //                 signedRequest:'...',
    //                 userID:'...'
    //             }
    //           }

  return(
    // <Redirect to='/login' />
    <div>
      <GoogleLogin
      clientId="852964869244-mh39ht2ltdps0q0eic1tftmvs5cc5ki3.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      />

      <h1>middle</h1>

      <FacebookLogin
      appId="1620429328158710"
      autoLoad={true}
      fields="name,email,picture"
      // onClick={componentClicked}
      callback={responseFacebook} />

    </div>
  )
}

const mapStateTOProps = (state) => {
  return state
}

export default connect(null, {log_out})(Logout);
