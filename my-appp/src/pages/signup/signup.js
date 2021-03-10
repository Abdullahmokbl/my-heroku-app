import React, {useState} from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { sign_up } from "../../actions/types";
// import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './signup.css'

const Signup = ({sign_up, err}) => {
  // console.log(err.msg)
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })
  const click = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const form = (e) => {
    console.log(user)
    e.preventDefault()
    sign_up(user)
    return(
      <Redirect to='/' />
    )
  }
  return (
    <div className='signup'>
      <form method='POST' onSubmit={(e)=> form(e)}>
        <input type='text' id='username' name='username' placeholder='Username' onChange={(e)=> click(e)} />
        {/* <label>Email</label> */}
        <input type='text' name='email' placeholder='email' onChange={(e)=> click(e)} />
        {/* <label>Password</label> */}
        <input type='password' name='password' placeholder='password' onChange={(e)=> click(e)} />
        <input type='submit' value='signup' />
      </form>
      {err.id == 'REGISTER_FAIL'? <div className='err'>{err.msg.msg}</div>:null}
      <div className='auth'>Sign up with Google</div>
      <div className='auth'>Sign up with Facebook</div>
    </div>
  )
}

const mapStateTOProps = (state) => {
  return state
}

export default connect(mapStateTOProps, {sign_up})(Signup);