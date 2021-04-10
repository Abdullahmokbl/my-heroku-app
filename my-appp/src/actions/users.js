import axios from 'axios';
import {return_errors} from './errors';

export const load_user = () => (dispatch, getState) => {
  // user loading
  dispatch({type: 'USER_LOADING'})

  // get token
  const token = getState().token

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
    }
  }

  if(token){
    axiosConfig.headers['x-auth-token'] = token;
  }

  axios.get('http://localhost:5000/user', axiosConfig)
    .then(res=>{
      dispatch({
        type: 'USER_LOADED',
        user: res.data
      })
    })
    .catch(err=>{
      dispatch(return_errors(err.response.data, err.response.status))
      dispatch({
        type: 'AUTH_ERROR'
      })
    })
}

export const sign_up = (user) => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/signup', user, axiosConfig)
  .then(res=> 
    dispatch({
      type: 'REGISTER_SUCCESS',
      user: res.data
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'REGISTER_FAIL'))
    dispatch({
      type: 'REGISTER_FAIL'
    })
  })
}

export const log_in = (user) => dispatch => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
        }
  };
  axios.post('http://localhost:5000/login', user, axiosConfig)
  .then(res=> 
    dispatch({
      type: 'LOGIN_SUCCESS',
      user: res.data
    })
  )
  .catch(err=> {
    dispatch(return_errors(err.response.data, err.response.msg, 'LOGIN_FAIL'))
    dispatch({
      type: 'LOGIN_FAIL'
    })
  })
}

export const log_out = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

export const get_user_items = (user_id) => dispatch => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
        }
  };
  axios.post('http://localhost:5000/items/userItems', {user_id}, axiosConfig)
  .then(res=> 
    dispatch({
      type: 'GET_USER_ITEM_SUCCESS',
      items: res.data
    })
  )
  .catch(err=> {
    dispatch(return_errors(err.response.data, err.response.msg, 'GET_USER_ITEM_FAIL'))
    dispatch({
      type: 'GET_USER_ITEM_FAIL'
    })
  })
}

export const send_mail = (email) => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/mail', {email}, axiosConfig)
  .then(res=>
    dispatch({
      type: 'SEND_MAIL',
      msg: res.data.msg
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'SEND_MAIL_FAIL'))
    dispatch({
      type: 'SEND_MAIL_FAIL'
    })
  })
}