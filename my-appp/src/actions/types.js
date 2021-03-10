import axios from 'axios';

export const add = () => {
  console.log('sd')
  return {
    type: 'ADD'
  }
}

export const return_errors = (msg, status, id=null) => {
  console.log('sdd')
  return {
    type: 'GET_ERRORS',
    payload: {msg, status, id}
  }
}
export const clear_errors = () => {
  return {
    type: 'CLEAR_ERRORS'
  }
}

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
        payload: res.data
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
      payload: res
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
      payload: res
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

export const get_items = () => (dispatch, getState) => {

  const token = getState().token;

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
        }
  };

  if(token){
    axiosConfig.headers['x-auth-token'] = token;
  }

  axios.get('http://localhost:5000/items', axiosConfig)
  .then(res=> 
    dispatch({
      type: 'GET_ITEMS',
      items: res.data
    })
  )
  .catch(err=> console.log(err.response))
}

export const get_item = (id) => dispatch => {
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
        }
  };
  axios.get('http://localhost:5000/items/item/'+id, axiosConfig)
  .then(res=> 
    dispatch({
      type: 'GET_ITEM',
      item: res.data
    })
  )
  .catch(err=> console.log(err))
}