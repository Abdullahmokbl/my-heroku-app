import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { log_out } from "../../actions/types";
import {Redirect} from 'react-router';

const Logout = ({log_out}) => {

  useEffect(()=>{
    log_out()
  },[log_out])

  return(
    <Redirect to='/login' />
  )
}

export default connect(null, {log_out})(Logout);
