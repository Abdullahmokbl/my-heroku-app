import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { log_in, load_user } from "../../actions/types";
import './login.css'

const Login = ({log_in, err}) => {

  const [user, setUser] = useState({
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
    log_in(user)
    return(
      <Redirect to='/' />
    )
  }
  // const form = (e) => {
  //   e.preventDefault()
  //   log_in()
  // }

  return (
    <div className='login'>
      <form method='POST'>
        {/* <label>Email</label> */}
        <input type='text' name='email' placeholder='email' onChange={(e)=> click(e)} />
        {/* <label>Password</label> */}
        <input type='password' name='password' placeholder='password' onChange={(e)=> click(e)} />
        <button onClick={(e)=> form(e)}>login</button>
        {/* <input type='submit' value='signup' /> */}
      </form>
      {err.id == 'LOGIN_FAIL'? <div className='err'>{err.msg.msg}</div>:null}
      <div className='auth'>Login with Google</div>
      <div className='auth'>Login with Facebook</div>
    </div>
  )
}

const mapStateTOProps = (state) => {
  return state
}

export default connect(mapStateTOProps, {log_in, load_user})(Login);
