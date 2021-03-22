import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { log_in, load_user } from "../../actions/types";
import './login.css';

const Login = (props) => {
  console.log(props.history)
  const {log_in, err} = props
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
    e.preventDefault()
    log_in(user)
    return(
      <Redirect to='/' />
    )
  }
  return (
    <div className='login'>
      <form method='POST' onSubmit={(e)=>form(e)}>
        <input type='text' name='email' placeholder='email' onChange={(e)=> click(e)} required />
        <input type='password' name='password' placeholder='password' onChange={(e)=> click(e)} required />
        <input type='submit' value='login' />
      </form>
      {err.id === 'LOGIN_FAIL'? <div className='err'>{err.msg.msg}</div>:null}
      <div className='auth'>Login with Google</div>
      <div className='auth'>Login with Facebook</div>
      <div className='auth'><a href='/signup'>Register</a></div>
    </div>
  )
}

const mapStateTOProps = (state) => {
  return state
}

export default connect(mapStateTOProps, {log_in, load_user})(Login);
