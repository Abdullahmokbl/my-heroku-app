import axios from 'axios';

export const return_errors = (msg, status, id=null) => {
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

export const add_item = item => dispatch => {
  let axiosConfig = {
    headers: {
      // 'Content-Type': 'application/json;charset=UTF-8',
      'Content-Type': 'multipart/form-data;',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/items', item, axiosConfig)
  .then(res=>
    dispatch({
      type: 'ADD_ITEM',
      item: res
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'ADD_ITEM_FAIL'))
    dispatch({
      type: 'ADD_ITEM_FAIL'
    })
  })
}

export const add_to_cart = (user_id, cart) => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/cart',{user_id, cart} , axiosConfig)
  .then(res=>
    dispatch({
      type: 'ADD_TO_CART',
      item: res
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'ADD_TO_CART_FAIL'))
    dispatch({
      type: 'ADD_TO_CART_FAIL'
    })
  })
}
export const del_cart = (user_id, cart) => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/cart/del',{user_id, cart} , axiosConfig)
  .then(res=>
    dispatch({
      type: 'DEL_CART',
      cart: cart
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'DEL_CART_FAIL'))
    dispatch({
      type: 'DEL_CART_FAIL'
    })
  })
}
export const del_all_cart = (user_id) => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/cart/delAll',{user_id} , axiosConfig)
  .then(res=>
    dispatch({
      type: 'DEL_ALL_CART'
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'DEL_ALL_CART_FAIL'))
    dispatch({
      type: 'DEL_ALL_CART_FAIL'
    })
  })
}

export const search_item = (item) => dispatch => {
  if (!item || item === ''){
    dispatch({type: 'SEARCH_ITEM_FAIL'})
    return;
  }
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/items/search',{item} , axiosConfig)
  .then(res=>
    dispatch({
      type: 'SEARCH_ITEM',
      items: res.data
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'SEARCH_ITEM_FAIL'))
    dispatch({
      type: 'SEARCH_ITEM_FAIL'
    })
  })
}

export const send_mail = () => dispatch => {
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': "*",
      }
  };
  axios.post('http://localhost:5000/user/mail', axiosConfig)
  .then(res=>
    dispatch({
      type: 'SEND_MAIL',
      payload: res
    })
  )
  .catch(err=>{
    dispatch(return_errors(err.response.data, err.response.status, 'SEND_MAIL_FAIL'))
    dispatch({
      type: 'SEND_MAIL_FAIL'
    })
  })
}