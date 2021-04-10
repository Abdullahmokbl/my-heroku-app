import React, {useState} from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { sign_up } from "../../actions/users";
import './signup.css'

const Signup = ({sign_up, err}) => {
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
    e.preventDefault()
    sign_up(user)
    return(
      <Redirect to='/' />
    )
  }
  return (
    <div className='signup'>
      <form method='POST' onSubmit={(e)=> form(e)}>
        <input type='text' id='username' name='username' placeholder='Username' onChange={(e)=> click(e)} required />
        <input type='text' name='email' placeholder='email' onChange={(e)=> click(e)} required />
        <input type='password' name='password' placeholder='password' onChange={(e)=> click(e)} required />
        <input type='submit' value='signup' />
      </form>
      {err.id === 'REGISTER_FAIL'? <div className='err'>{err.msg.msg}</div>:null}
      <div className='auth'>Sign in with Google</div>
      <div className='auth'>Sign in with Facebook</div>
      <div className='auth'><a href='/login'>Login</a></div>
    </div>
  )
}

const mapStateTOProps = (state) => {
  return state
}

export default connect(mapStateTOProps, {sign_up})(Signup);